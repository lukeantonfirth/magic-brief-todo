# 🚀 Next.js To-Do App

Welcome to the Next.js To-Do App! This is a modern, full-stack application built with the latest and greatest: Next.js, Tailwind CSS, Prisma, and tRPC. Manage your tasks efficiently and in style!

## 🛠️ Tech Stack

- **Next.js** - The React Framework for Production
- **Tailwind CSS** - A utility-first CSS framework
- **Prisma** - Next-generation ORM for Node.js & TypeScript
- **tRPC** - End-to-end typesafe APIs

## 🌟 Features

- **CRUD Operations**: Create, Read, Update, and Delete your tasks
- **Responsive Design**: Beautiful UI with Tailwind CSS
- **Type Safety**: End-to-end typesafe APIs with tRPC
- **Database Management**: Simple and efficient database management with Prisma

## 🚀 Getting Started

Follow these steps to get the project up and running on your local machine:

### 1. Clone the Repository and Install Dependencies

Make sure you have `yarn` installed. If not, install it from [here](https://classic.yarnpkg.com/en/docs/install/).

bash
clone
`cd nextjs-todo-app`
`yarn install`

`npx prisma init --datasource-provider sqlite`
`npx prisma migrate dev --name init`
`npx prisma studio`

yarn dev

## 2. Initialize Prisma and Set Up the Database

Run the following commands to initialize Prisma with SQLite as the datasource provider, set up the database, and open Prisma Studio:

npx prisma init --datasource-provider sqlite
npx prisma migrate dev --name init
npx prisma studio

## 3. Run the Development Server

You're all set! Start the development server:

`yarn dev`
Open http://localhost:3000 in your browser to see the app in action.

📂 ##Project Structure##
Here's a quick overview of the project structure:

├── prisma # Prisma schema and migrations
│ ├── schema.prisma
│ └── migrations
├── src
│ ├── components # React components
│ │ └── Card.tsx
│ ├── pages # Next.js pages
│ │ ├── api
│ │ │ └── trpc
│ │ │ └── [trpc].ts
│ │ ├── \_app.tsx
│ │ └── index.tsx
│ ├── server # tRPC router and context
│ │ ├── context.ts
│ │ └── router.ts
│ ├── styles # Tailwind CSS styles
│ │ └── globals.css
│ └── utils # Utility functions
│ └── trpc.ts
