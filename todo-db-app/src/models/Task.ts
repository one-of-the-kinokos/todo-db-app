import { db } from "@/database/schema";

async function createTask(args: { newTask: string }) {
  const timestamp = Date.now();
  try {
    await db.tasks.add({
      value: args.newTask,
      createdAt: timestamp,
      updatedAt: timestamp,
    });
    return timestamp;
  } catch (error) {
    throw error;
  }
}

async function readTasks() {
  try {
    const result = await db.tasks.toArray();
    return result;
  } catch (error) {
    throw error;
  }
}

async function deleteTask(id: number) {
  try {
    const timestamp = Date.now();
    await db.tasks.delete(id);
    return timestamp;
  } catch (error) {
    throw error;
  }
}

const Task = {
  createTask: createTask,
  readTasks: readTasks,
  deleteTask: deleteTask,
};

export { Task };
