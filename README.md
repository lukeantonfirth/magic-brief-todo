# Really Nice TODO App!

Welcome to my really nice todo app, a simple and efficient task manager. Built with React, TypeScript, Tailwind CSS, Prisma, tRPC, and SQLite, this app helps you stay organized and manage your tasks with ease.

## 🛠️ Tech Stack

- **React & TypeScript**: Enjoy a scalable and maintainable codebase with the combination of React’s component-based architecture and TypeScript’s static typing.
- **Tailwind CSS**: Style your tasks with ease using utility-first CSS classes.
- **Prisma & SQLite**: Experience seamless data management with Prisma’s ORM capabilities and SQLite’s lightweight database.
- **tRPC**: Benefit from type-safe API calls with minimal boilerplate.

## 🌟 Features

- **CRUD Operations**: Create, Read, Update, and Delete your tasks
- **Responsive Design**:UI with Tailwind CSS and Classnames
- **Type Safety**: APIs with tRPC
- **Database Management**: Database management with Prisma

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Repository and Install Dependencies

Make sure you have `yarn` installed. If not, install it from [here](https://classic.yarnpkg.com/en/docs/install/).

- `git clone git@github.com:lukeantonfirth/magic-brief-todo.git`
- `cd magic-brief-todo` -`yarn`

## 2. Initialize Prisma and Set Up the Database

Run the following commands to initialize Prisma with SQLite as the datasource provider, set up the database, and open Prisma Studio:

- `npx prisma init --datasource-provider sqlite`
- `npx prisma migrate dev --name init`
- `npx prisma studio` This will open up a visual of the db

## 3. Run the Development Server

You're all set! Start the development server:

- `yarn dev`

Open http://localhost:3000 in your browser to see the app in action.
Open http://localhost:5555 in your browser to see the prisma schema

📂 ##Project Structure##
Here's a quick overview of the project structure:

## Project Structure

```plaintext
MAGIC-BRIEF-TODO
├── .next
├── node_modules
├── prisma # Prisma schema and migrations
│   ├── migrations
│   │   └── dev.db
│   └── schema.prisma
├── public
├── src
│   ├── components #
│   ├── hooks #
│   │   └── mutations
│   │       ├── index.ts
│   │       ├── useCreateTaskMutation.tsx
│   │       ├── useDeleteAllTasksMutation.tsx
│   │       ├── useDeleteTaskMutation.tsx
│   │       ├── useUpdateOrCreateTasksMutation.tsx
│   │       └── useUpdateTaskMutation.tsx
│   ├── interfaces #
│   │   ├── common
│   │   └── db
│   │       └── index.ts
│   ├── pages # Next.js pages
│   │   ├── api
│   │   │   └── trpc
│   │   │       └── [trpc].ts
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   └── index.tsx
│   ├── server # tRPC router and context
│   │   ├── context.ts
│   │   ├── router.ts
│   │   └── task.router.ts
│   ├── styles # Tailwind CSS styles
│   │   └── globals.css
│   ├── types #
│   │   ├── common
│   │   └── db
│   │       └── index.ts
│   └── utils # Utility functions
│       ├── formatDatePickerDate.ts
│       ├── generateUniqueNumber.ts
│       ├── handleConsoleError.ts
│       ├── index.ts
│       ├── localStorageHelpers.ts
│       └── trpc.ts
```

# Enhancements List

## 1. Offline Task Flags

- **Objective**: Add a flag to each offline task indicating whether it is a "create", "update", or "delete" operation.
- **Implementation**:
  - Modify the local storage structure to include an operation flag for each task.
  - Update the task creation, update, and deletion functions to set the appropriate flag.
  - Enhance the `handleOnline` function to cycle through the list of tasks in local storage and trigger the correct mutation based on the flag.
  - Example structure:
    ```json
    {
      "tasks": [
        {
          "id": 1,
          "title": "Task 1",
          "dueDate": "2024-07-17",
          "completed": false,
          "operation": "create"
        },
        {
          "id": 2,
          "title": "Task 2",
          "dueDate": "2024-07-18",
          "completed": true,
          "operation": "update"
        }
        {
          "id": 3,
          "title": "Task 3",
          "dueDate": "2024-07-19",
          "completed": false,
          "operation": "delete"
        }
      ]
    }
    ```

## 2. Modular Routes with Prisma and tRPC

- **Objective**: Refactor Prisma and tRPC routes to be more modular, enabling better scalability.
- **Implementation**:
  - Break down existing routes into smaller, reusable modules.
  - Organize routes by functionality.
  - Create a clear directory structure for the routes to improve maintainability.
  - Example structure:
    ```
    src/
    ├── server/
    │   ├── context.ts
    │   ├── routers/
    │   │   ├── index.ts
    │   │   ├── taskRouter.ts
    │   │   ├── userRouter.ts
    │   │   └── ...
    │   └── ...
    ```

## Implementation Plan

1. **Add Offline Task Flags**:

   - Modify local storage functions to include operation flags.
   - Update task mutation functions to set operation flags appropriately.
   - Enhance `handleOnline` function to process tasks based on their operation flags.

2. **Improve Prisma and tRPC Routes**:
   - Identify existing routes and categorize them by functionality.
   - Update imports and route registrations to use the new modular structure.
