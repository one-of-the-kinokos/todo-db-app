import { dbOperatedTimeAtom } from "@/atom";
import { TaskType } from "@/database/schema";
import { Task } from "@/models";
import { useAtom } from "jotai";
import { RefObject, useEffect, useState, useTransition } from "react";

function useTodoPageViewModel(args: {
  newTaskInputRef: RefObject<HTMLInputElement | null>;
}) {
  const [dbOperatedTime, setDbOperatedTime] = useAtom(dbOperatedTimeAtom);
  const [tasksList, setTasksList] = useState<TaskType[]>([]);
  const [isOperating, startOperation] = useTransition();

  async function createTaskButtonHandler() {
    startOperation(async () => {
      if (!args.newTaskInputRef.current) {
        return;
      }

      try {
        const timestamp = await Task.createTask({
          newTask: args.newTaskInputRef.current.value,
        });
        setDbOperatedTime(timestamp);
      } catch (error) {
        throw error;
      }
    });
  }

  async function deleteTaskButtonHandler(id: number) {
    startOperation(async () => {
      try {
        const timestamp = await Task.deleteTask(id);
        setDbOperatedTime(timestamp);
      } catch (error) {
        throw error;
      }
    });
  }

  useEffect(() => {
    startOperation(async () => {
      const result = await Task.readTasks();
      setTasksList(result ? result : []);
    });
  }, [dbOperatedTime]);

  const todoPageVM = {
    states: {
      tasksList: tasksList,
      isOperating: isOperating,
    },
    methods: {
      createTaskButtonHandler: createTaskButtonHandler,
      deleteTaskButtonHandler: deleteTaskButtonHandler,
    },
  };

  return todoPageVM;
}

export { useTodoPageViewModel };
