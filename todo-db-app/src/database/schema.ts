import Dexie, { EntityTable } from "dexie";

type TaskType = {
  id: number;
  value: string;
  createdAt: number;
  updatedAt: number;
};

const db = new Dexie("todo-db-app") as Dexie & {
  tasks: EntityTable<TaskType, "id">;
};

db.version(1).stores({
  tasks: "++id, value, createdAt, updatedAt",
});

export type { TaskType };
export { db };
