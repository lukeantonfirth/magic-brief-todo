# 🚀 Next.js To-Do App

Welcome to the Next.js To-Do App! This is a modern, full-stack application built with the latest and greatest: Next.js, Tailwind CSS, Prisma, and tRPC. Manage your tasks efficiently and in style!

## 🛠️ Tech Stack

- **Next.js** - The React Framework for Production
- **Tailwind CSS** - A utility-first CSS framework
- **Prisma** - Next-generation ORM for Node.js & TypeScript
- **tRPC** - End-to-end typesafe APIs

## 🌟 Features

- **CRUD Operations**: Create, Read, Update, and Delete your tasks
- **Responsive Design**:UI with Tailwind CSS and Classnames
- **Type Safety**: APIs with tRPC
- **Database Management**: Database management with Prisma

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Repository and Install Dependencies

Make sure you have `yarn` installed. If not, install it from [here](https://classic.yarnpkg.com/en/docs/install/).

`clone link here`
`cd magic-brief-todo`
`yarn`

yarn dev

## 2. Initialize Prisma and Set Up the Database

Run the following commands to initialize Prisma with SQLite as the datasource provider, set up the database, and open Prisma Studio:

`npx prisma init --datasource-provider sqlite`
`npx prisma migrate dev --name init`
`npx prisma studio` This will open up a visual of the db

## 3. Run the Development Server

You're all set! Start the development server:

`yarn dev`

Open http://localhost:3000 in your browser to see the app in action.
Open http://localhost:5555 in your browser to see the prisma schema

📂 ##Project Structure##
Here's a quick overview of the project structure:

# Project Structure

## MAGIC-BRIEF-TODO

├── .next
├── node_modules
├── prisma # Prisma schema and migrations
│ ├── migrations
│ │ └── dev.db
│ └── schema.prisma
├── public
├── src
│ ├── components #
│ ├── hooks #
│ │ └── mutations
│ │ ├── index.ts
│ │ ├── useCreateTaskMutation.tsx
│ │ ├── useDeleteAllTasksMutation.tsx
│ │ ├── useDeleteTaskMutation.tsx
│ │ ├── useUpdateOrCreateTasksMutation.tsx
│ │ └── useUpdateTaskMutation.tsx
│ ├── interfaces #
│ │ ├── common
│ │ └── db
│ │ └── index.ts
│ ├── pages # Next.js pages
│ │ ├── api
│ │ │ └── trpc
│ │ │ └── [trpc].ts
│ │ ├── \_app.tsx
│ │ ├── \_document.tsx
│ │ └── index.tsx
│ ├── server # tRPC router and context
│ │ ├── context.ts
│ │ ├── router.ts
│ │ └── task.router.ts
│ ├── styles # Tailwind CSS styles
│ │ └── globals.css
│ ├── types #
│ │ ├── common
│ │ └── db
│ │ └── index.ts
│ └── utils # Utility functions
│ ├── formatDatePickerDate.ts
│ ├── generateUniqueNumber.ts
│ ├── handleConsoleError.ts
│ ├── index.ts
│ ├── localStorageHelpers.ts
│ └── trpc.ts
