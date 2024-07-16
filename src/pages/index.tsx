'use client';

import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import { Task } from '@prisma/client';

import {
  Card,
  CardContent,
  CardHeader,
  List,
} from '../components/Card';
import { handleConsoleError } from '../utils';
import {
  useCreateTaskMutation,
  useDeleteAllTaskMutation,
  useUpdateTaskMutation,
} from '../hooks';

import { trpc } from '@/utils/trpc';
import { ListItem, TaskInput } from '@/components';

const Home: NextPage = () => {
  const [taskName, setTaskName] = useState<Task['title']>('');

  const { data: list, refetch } = trpc.useQuery(['findAll']);

  const {
    mutationHandler: createTaskMutation,
    isLoading: isCreateTaskMutationLoading,
  } = useCreateTaskMutation({
    onError: (error) =>
      handleConsoleError(`Error creating task ${error}`),
    onSuccess: refetch,
  });

  const {
    mutationHandler: deleteAllTasksMutation,
    isLoading: isDeleteAllTasksMutationLoading,
  } = useDeleteAllTaskMutation({
    onError: (error) =>
      handleConsoleError(`Error deleting all tasks ${error}`),
    onSuccess: refetch,
  });

  const {
    mutationHandler: updateTaskMutation,
    isLoading: isUpdateTaskMutationLoading,
  } = useUpdateTaskMutation({
    onError: (error) =>
      handleConsoleError(`Error deleting all tasks ${error}`),
    onSuccess: refetch,
  });

  const createTask = useCallback(() => {
    if (!taskName) {
      return;
    }

    createTaskMutation({
      completed: false,
      dueDate: new Date().toISOString(),
      title: taskName,
    });

    setTaskName('');
  }, [taskName, createTaskMutation]);

  const handleDeleteAllTasks = useCallback(() => {
    if (list?.length) {
      deleteAllTasksMutation({
        ids: list.map((item) => item.id),
      });
    }
  }, [list, deleteAllTasksMutation]);

  const updateTask = useCallback(
    ({ completed, id, title }: Task) => {
      updateTaskMutation({
        completed: !completed,
        dueDate: new Date().toISOString() ?? '',
        id,
        title,
      });
    },
    [updateTaskMutation],
  );

  const isLoading =
    isCreateTaskMutationLoading ||
    isDeleteAllTasksMutationLoading ||
    isUpdateTaskMutationLoading;
  //TODO!! Pull all of this out and make html accessible
  //TODO!! Add a loading spinner
  //TODO!! Add a message for when there are no tasks
  //TODO!! Clean tailwind
  //TODO!! Simplify Components
  //TODO!! Add offline storage sync when online
  //TODO Add a way to delete a single task
  //TODO Clean all variable names
  //TODO Add all generic types
  //TODO Deploy to vercel
  //TODO figure out how to deploy DB and stuff
  return (
    <main>
      <Card>
        <CardContent>
          <CardHeader
            title="Todo List"
            listLength={list?.length ?? 0}
            clearAllFn={handleDeleteAllTasks}
          />
          <List>
            {list?.map((item) => (
              <ListItem
                key={item.id}
                item={item}
                onUpdate={updateTask}
              />
            ))}
          </List>
        </CardContent>
        <TaskInput
          value={taskName}
          onChange={(event) => setTaskName(event.target.value)}
          submit={createTask}
        />
      </Card>
    </main>
  );
};

export default Home;
