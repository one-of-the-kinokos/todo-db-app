import Dexie, { EntityTable } from "dexie";

// Todoリストに保存される予定オブジェクトの型
type TaskType = {
  id: number;
  value: string;
  createdAt: number;
  updatedAt: number;
};

// データベース操作用オブジェクト(Dexieオブジェクトのインスタンス)から、
// 独自に定義したテーブル(tasksテーブル)にアクセスできるように交差型とキャストを使って型を再定義する。
const db = new Dexie("todo-db-app") as Dexie & {
  tasks: EntityTable<TaskType, "id">;
};

// ブラウザのデータベースにデータベース構造を定義させるための処理
db.version(1).stores({
  tasks: "++id, value, createdAt, updatedAt",
});

// exportして他のプログラムから参照できるようにする
export type { TaskType };
export { db };
