import { db } from "@/database/schema";

/**
 * 予定を新規に追加するための関数。
 * 追加に成功した場合、その処理を行った時刻(UNIX時間)を返す。
 * @param value
 * @returns
 */
async function createTask(value: string) {
  const timestamp = Date.now();
  try {
    await db.tasks.add({
      value: value,
      createdAt: timestamp,
      updatedAt: timestamp,
    });
    return timestamp;
  } catch (error) {
    throw error;
  }
}

/**
 * tasksテーブルに存在するすべての予定を取得する関数。
 * 取得できた場合、予定(TaskType型の値)の配列を返す。
 * @returns
 */
async function readTasks() {
  try {
    const result = await db.tasks.toArray();
    return result;
  } catch (error) {
    throw error;
  }
}

/**
 * 引数で指定されたIDに基づいて、tasksテーブルから予定を削除する関数。
 * 削除できた場合、その処理が行われた時刻(UNIX時間)を返す。
 * @param id
 * @returns
 */
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
