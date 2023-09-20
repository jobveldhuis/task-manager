import Swiper from "react-native-swiper";
import { useAuthentication } from "@/backend/authentication";
import { useEffect, useState } from "react";
import { hasSeenTutorial } from "@/util/has-seen-tutorial";
import { router } from "expo-router";
import { FullPageSpinner } from "@/ui/full-page-spinner";
import { getTodosByUser, setCompletedStatus } from "@/backend/database";
import type { Todo } from "@/types/todo.type";
import { useIsActive } from "@/util/use-is-active.hook";
import {
  CreateTodoPage,
  SettingsPage,
  AppPagination,
  TodoPage,
} from "@/components/app";

export default function Main(): JSX.Element | null {
  const { user } = useAuthentication();
  const isActive = useIsActive();

  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);

  if (user === null) {
    return null;
  }

  useEffect(() => {
    getTodosByUser(user.uid).then(setTodos);
    setIsLoading(false);
  }, [isActive]);

  useEffect(() => {
    const redirectIfNotSeenTutorial = async () => {
      const hasSeen = await hasSeenTutorial(user.uid);
      if (!hasSeen) {
        router.replace("/(app)/tutorial");
      }
    };

    redirectIfNotSeenTutorial();
  }, [user]);

  const markTodoCompleted = async (id: string) => {
    const current = todos;
    const todo = current.find((item) => item.id === id);

    setTodos([
      ...current.filter((item) => item.id !== id),
      {
        ...todo!,
        completionDate: new Date(),
        isCompleted: true,
      },
    ]);
    try {
      await setCompletedStatus(user.uid, id, true);
    } catch {
      setTodos(current);
    }
  };

  const markTodoUnfinished = async (id: string) => {
    const current = todos;
    const todo = current.find((item) => item.id === id);

    setTodos([
      ...current.filter((item) => item.id !== id),
      {
        ...todo!,
        rating: null,
        completionDate: null,
        isCompleted: false,
      },
    ]);

    try {
      await setCompletedStatus(user.uid, id, false);
    } catch {
      setTodos(current);
    }
  };

  return isLoading ? (
    <FullPageSpinner />
  ) : (
    <Swiper
      loop={false}
      index={1}
      renderPagination={(index) => <AppPagination selectedIndex={index} />}
    >
      <CreateTodoPage user={user} />
      <TodoPage
        todos={todos}
        user={user}
        markTodoCompleted={markTodoCompleted}
        markTodoUnfinished={markTodoUnfinished}
      />
      <SettingsPage />
    </Swiper>
  );
}
