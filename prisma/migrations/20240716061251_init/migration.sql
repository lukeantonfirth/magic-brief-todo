-- CreateTable
CREATE TABLE "Task" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "dueDate" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false
);
