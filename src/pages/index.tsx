'use client';

import React, { useCallback, useState, useEffect } from 'react';
import type { NextPage } from 'next';

import { DateValue } from 'react-aria-components';

import { Task } from '@prisma/client';
import cx from 'classnames';

import {
  useDeleteAllTaskMutation,
  useUpdateOrCreateTasksMutation,
} from '@/hooks';

import {
  formatDatePickerDate,
  generateUniqueNumber,
  handleConsoleError,
  loadTasksFromLocalStorage,
  saveTasksToLocalStorage,
  trpc,
  waitForOnline,
} from '@/utils';

import {
  Container,
  Header,
  List,
  ListItem,
  Spinner,
  TaskInput,
} from '@/components';

const Home: NextPage = () => {
  const [taskName, setTaskName] = useState<Task['title']>('');
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [localList, setLocalList] = useState<Task[]>([]);

  const { data: list, refetch } = trpc.useQuery(['findAll'], {
    onSuccess: (data) => {
      setLocalList(data);
      saveTasksToLocalStorage(data);
    },
  });

  const {
    mutationHandler: deleteAllTasksMutation,
    isLoading: isDeleteAllTasksMutationLoading = false,
  } = useDeleteAllTaskMutation({
    onError: (error) =>
      handleConsoleError(`Error deleting all tasks: ${error}`),
    onSuccess: () => refetch(),
  });

  const {
    mutationHandler: updateOrCreateTasksMutation,
    isLoading: isUpdatingOrCreatingTasks = false,
  } = useUpdateOrCreateTasksMutation({
    onError: (error) => {
      refetch();
      handleConsoleError(
        `Error updating and creating tasks: ${error}`,
      );
    },
    onSuccess: () => refetch(),
  });

  const handleDeleteAllTasks = useCallback(() => {
    if (!list) {
      return;
    }

    deleteAllTasksMutation({
      ids: list.map((item) => item.id),
    });

    setLocalList([]);
    saveTasksToLocalStorage([]);
  }, [list, deleteAllTasksMutation]);

  const handleCreateTask = useCallback(() => {
    if (!taskName) {
      return;
    }

    const newTask: Task = {
      completed: false,
      dueDate: formattedDate,
      id: Number(generateUniqueNumber()), //temp offline id
      title: taskName,
    } as const;

    setLocalList((prevList) => {
      const updatedList = [...prevList, newTask];
      saveTasksToLocalStorage(updatedList);
      return updatedList;
    });

    updateOrCreateTasksMutation([newTask]);

    setTaskName('');
  }, [formattedDate, taskName, updateOrCreateTasksMutation]);

  const handleUpdateTask = useCallback(
    ({ completed, dueDate, id, title }: Task) => {
      setLocalList((prevList) => {
        const updatedList = prevList.map((task) =>
          task.id === id ? { ...task, completed: !completed } : task,
        );
        saveTasksToLocalStorage(updatedList);
        return updatedList;
      });

      //Using upset to minimize code and simplify the syncronization
      updateOrCreateTasksMutation([
        {
          completed: !completed,
          dueDate: dueDate,
          id,
          title,
        },
      ]);
    },
    [updateOrCreateTasksMutation],
  );

  const handleDeleteTask = useCallback((id: Task['id']) => {
    setLocalList((prevList) => {
      const updatedList = prevList.filter((task) => task.id !== id);

      saveTasksToLocalStorage(updatedList);

      return updatedList;
    });
  }, []);

  const handleOnDateChange = (date: DateValue) => {
    setFormattedDate(formatDatePickerDate(date));
  };

  const handleOnTaskNameInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const {
      target: { value },
    } = event;

    setTaskName(value);
  };

  const syncLocalTasksWithServer = useCallback(async () => {
    await waitForOnline(); // Wait until the app is online

    const localTasks = loadTasksFromLocalStorage();

    if (!list) {
      return;
    }

    updateOrCreateTasksMutation(localTasks);
  }, [list, updateOrCreateTasksMutation]);

  useEffect(() => {
    setLocalList(loadTasksFromLocalStorage());
  }, []);

  useEffect(() => {
    const handleOnline = () => {
      syncLocalTasksWithServer();
    };

    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('online', handleOnline);
    };
  }, [syncLocalTasksWithServer]);

  const isLoading =
    isDeleteAllTasksMutationLoading || isUpdatingOrCreatingTasks;

  return (
    <main>
      {isLoading && <Spinner />}
      <Container>
        <section
          aria-labelledby="todo-header"
          className={cx(
            'bg-white',
            'drop-shadow-md',
            'rounded-lg',
            'w-5/6',
            'md:w-4/6',
            'lg:w-3/6',
            'xl:w-2/6',
          )}>
          <Header
            title="Todo List"
            listLength={localList.length}
            onDeleteAllTasks={handleDeleteAllTasks}
          />
          <List>
            {localList.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onDelete={() => handleDeleteTask(item.id)}
                onUpdate={handleUpdateTask}
              />
            ))}
          </List>
        </section>

        <section
          aria-labelledby="add-task-header"
          className={cx(
            'bg-white',
            'drop-shadow-md',
            'mt-4',
            'rounded-lg',
            'w-5/6',
            'md:w-4/6',
            'lg:w-3/6',
            'xl:w-2/6',
          )}>
          <h2 id="add-task-header" className="sr-only">
            Add a new task
          </h2>
          <TaskInput
            onDateChange={handleOnDateChange}
            onChange={handleOnTaskNameInputChange}
            onSubmit={handleCreateTask}
            value={taskName}
          />
        </section>
      </Container>
    </main>
  );
};

export default Home;
