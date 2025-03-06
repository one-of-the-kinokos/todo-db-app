import { dbOperatedTimeAtom } from "@/atom";
import { TaskType } from "@/database/schema";
import { Task } from "@/models";
import { useAtom } from "jotai";
import { RefObject, useEffect, useState, useTransition } from "react";
import { useErrorBoundary } from "react-error-boundary";

function useTodoPageViewModel(args: {
  newTaskInputRef: RefObject<HTMLInputElement | null>;
}) {
  const [dbOperatedTime, setDbOperatedTime] = useAtom(dbOperatedTimeAtom);
  const [tasksList, setTasksList] = useState<TaskType[]>([]);
  const { showBoundary } = useErrorBoundary();

  async function createTaskButtonHandler() {
    if (!args.newTaskInputRef.current) {
      return;
    }
    try {
      const timestamp = await Task.createTask({
        newTask: args.newTaskInputRef.current.value,
      });
      setDbOperatedTime(timestamp);
    } catch (error) {
      showBoundary(error);
    }
  }

  async function deleteTaskButtonHandler(id: number) {
    try {
      const timestamp = await Task.deleteTask(id);
      setDbOperatedTime(timestamp);
    } catch (error) {
      showBoundary(error);
    }
  }

  useEffect(() => {
    async function runAsync() {
      try {
        const result = await Task.readTasks();
        setTasksList(result ? result : []);
      } catch (error) {
        showBoundary(error);
      }
    }
    runAsync();
  }, [dbOperatedTime]);

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
