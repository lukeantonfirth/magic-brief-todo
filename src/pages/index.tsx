'use client';

import React, { useState, useEffect, ChangeEvent } from 'react';
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
  const [formattedDate, setFormattedDate] = useState<string>('');
  const [liveList, setLiveList] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<Task['title']>('');

  const { data: list, refetch } = trpc.useQuery(['findAll'], {
    onError: (error) =>
      handleConsoleError(`Error fetching tasks: ${error}`),
    onSuccess: (data) => {
      setLiveList(data);
      saveTasksToLocalStorage(data);
    },
  });

  const {
    mutationHandler: deleteAllTasksMutation,
    isLoading: isDeleteAllTasksMutationLoading = false,
  } = useDeleteAllTaskMutation({
    onSuccess: () => refetch(),
    onError: (error) =>
      handleConsoleError(`Error deleting all tasks: ${error}`),
  });

  const {
    mutationHandler: updateOrCreateTasksMutation,
    isLoading: isUpdatingOrCreatingTasks = false,
  } = useUpdateOrCreateTasksMutation({
    onSuccess: () => refetch(),
    onError: (error) => {
      refetch();
      handleConsoleError(
        `Error updating and creating tasks: ${error}`,
      );
    },
  });

  const handleDeleteAllTasks = () => {
    setLiveList([]);
    saveTasksToLocalStorage([]);

    if (!list) {
      return;
    }

    deleteAllTasksMutation({ ids: list.map((item) => item.id) });
  };

  const handleCreateTask = () => {
    if (!taskName) {
      return;
    }

    const newTask: Task = {
      completed: false,
      dueDate: formattedDate,
      id: Number(generateUniqueNumber()), // temp offline id
      title: taskName,
    } as const;

    setLiveList((prevList) => {
      const updatedList = [...prevList, newTask];
      saveTasksToLocalStorage(updatedList);
      return updatedList;
    });

    updateOrCreateTasksMutation([newTask]);
    setTaskName('');
  };

  const handleUpdateTask = ({
    completed,
    dueDate,
    id,
    title,
  }: Task) => {
    setLiveList((prevList) => {
      const updatedList = prevList.map((task) =>
        task.id === id ? { ...task, completed: !completed } : task,
      );
      saveTasksToLocalStorage(updatedList);
      return updatedList;
    });

    // Using upset to minimize code and simplify the synchronization
    updateOrCreateTasksMutation([
      { completed: !completed, dueDate, id, title },
    ]);
  };

  const handleDeleteTask = (id: Task['id']) => {
    // Running a filter here so we don't have to call the db
    setLiveList((prevList) => {
      const updatedList = prevList.filter((task) => task.id !== id);
      saveTasksToLocalStorage(updatedList);
      return updatedList;
    });
  };

  const handleOnDateChange = (date: DateValue) => {
    setFormattedDate(formatDatePickerDate(date));
  };

  const handleOnTaskNameInputChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = event.target;
    setTaskName(value);
  };

  const syncLocalTasksWithServer = async () => {
    await waitForOnline(); // Wait until the app is online
    const localTasks = loadTasksFromLocalStorage();

    if (!list) {
      return;
    }

    updateOrCreateTasksMutation(localTasks);
  };

  useEffect(() => {
    setLiveList(loadTasksFromLocalStorage());
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
            listLength={liveList.length}
            onDeleteAllTasks={handleDeleteAllTasks}
          />
          <List>
            {liveList.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onDelete={handleDeleteTask}
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
