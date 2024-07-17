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
