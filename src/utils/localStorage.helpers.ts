import { Task } from '@prisma/client';

// Helper function to save tasks to local storage
export const saveTasksToLocalStorage = (tasks: Task[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

// Helper function to load tasks from local storage
export const loadTasksFromLocalStorage = (): Task[] => {
  if (typeof window !== 'undefined') {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
  }
  return [];
};

// Helper function to check for online status
export const waitForOnline = (): Promise<void> => {
  return new Promise((resolve) => {
    if (navigator.onLine) {
      resolve();
    } else {
      window.addEventListener('online', () => resolve(), {
        once: true,
      });
    }
  });
};
