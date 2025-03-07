import { TaskType } from "@/database/schema";
import { Task } from "@/models";
import { RefObject, useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";

function useTodoPageViewModel(args: {
  newTaskInputRef: RefObject<HTMLInputElement | null>;
}) {
  // 最後にデータベースに書き込み処理を行った時刻(UNIX時間)
  const [dbOperatedTime, setDbOperatedTime] = useState<number>(0);
  // 画面に表示される、予定のリスト
  const [tasksList, setTasksList] = useState<TaskType[]>([]);
  // エラー時にエラー画面を呼び出すための関数
  const { showBoundary } = useErrorBoundary();

  // Input要素から値を取り出して、新規予定を追加する関数
  async function createTaskButtonHandler() {
    // Input要素が画面に存在しない場合は何もしない
    if (!args.newTaskInputRef.current) {
      return;
    }
    try {
      // Input要素から入力された文字列を受け取って、Taskモデルに予定の新規作成を命令する
      const timestamp = await Task.createTask(
        args.newTaskInputRef.current.value
      );
      // 処理が実行された時刻をstateにセットする
      setDbOperatedTime(timestamp);
    } catch (error) {
      // errorをキャッチした場合、エラー画面を呼び出す
      showBoundary(error);
    }
  }

  // 指定されたIDに基づいてtasksテーブルから予定を削除する関数
  async function deleteTaskButtonHandler(id: number) {
    try {
      // Taskモデルに対して予定の削除を命令する
      const timestamp = await Task.deleteTask(id);
      // 処理が実行された時刻をstateにセットする
      setDbOperatedTime(timestamp);
    } catch (error) {
      // errorをキャッチした場合、エラー画面を呼び出す
      showBoundary(error);
    }
  }

  // 初期描画のタイミングと、データベースへの変更(書き込み)が行われたタイミングで
  // tasksテーブルに保存されているデータを読み出す。
  useEffect(() => {
    async function runAsync() {
      try {
        // Taskモデルにtasksテーブルの読み出しを命令する
        const result = await Task.readTasks();
        // 読み出した結果を表示できるようにstateとしてセットする
        setTasksList(result);
      } catch (error) {
        // errorをキャッチした場合、エラー画面を呼び出す
        showBoundary(error);
      }
    }
    runAsync();
  }, [dbOperatedTime]);

  // Viewが状態や関数にアクセスできるようにするためのオブジェクト
  const todoPageViewModel = {
    states: {
      tasksList: tasksList,
    },
    methods: {
      createTaskButtonHandler: createTaskButtonHandler,
      deleteTaskButtonHandler: deleteTaskButtonHandler,
    },
  };

  return todoPageViewModel;
}

export { useTodoPageViewModel };
