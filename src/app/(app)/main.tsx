import Swiper from "react-native-swiper";
import { useCallback, useEffect, useRef, useState } from "react";
import { router } from "expo-router";
import { useAuthentication } from "@/backend/authentication";
import { hasSeenTutorial } from "@/util/has-seen-tutorial";
import {
  createTodo,
  getTodosByUser,
  setCompletedStatus,
} from "@/backend/database";
import type { Todo } from "@/types/todo.type";
import { useIsActive } from "@/util/use-is-active.hook";
import {
  CreateTodoPage,
  SettingsPage,
  AppPagination,
  TodoPage,
} from "@/components/app";
import { getStatisticsByUser } from "@/backend/database/get-statistics-by-user";
import { UserStatistics } from "@/types";

const EMPTY_USER_STATISTICS: UserStatistics = {
  totalCompleted: 0,
  totalCreated: 0,
  totalRatings: {
    happy: 0,
    veryHappy: 0,
    mad: 0,
    sad: 0,
    love: 0,
  },
};

export default function Main(): JSX.Element | null {
  const { user } = useAuthentication();
  const isActive = useIsActive();

  const [isLoading, setIsLoading] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [statistics, setStatistics] = useState(EMPTY_USER_STATISTICS);

  const paginationRef = useRef<Swiper>(null);

  const fetchTodos = useCallback(async () => {
    if (user?.uid == null) return;

    setIsLoading(true);
    const [newTodos, updatedStatistics] = await Promise.all([
      getTodosByUser(user.uid),
      getStatisticsByUser(user.uid),
    ]);

    setTodos(newTodos);
    setStatistics(updatedStatistics);
    setIsLoading(false);
  }, [user]);

  // Refetch todos when user changes or when app comes back to active state.
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos, isActive]);

  useEffect(() => {
    const redirectIfNotSeenTutorial = async () => {
      if (user === null) return;

      const hasSeen = await hasSeenTutorial(user.uid);
      if (!hasSeen) {
        router.replace("/(app)/tutorial");
      }
    };

    redirectIfNotSeenTutorial();
  }, [user]);

  if (user === null) {
    return null;
  }

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

    const updatedStatistics = await getStatisticsByUser(user.uid);
    setStatistics(updatedStatistics);
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

    const updatedStatistics = await getStatisticsByUser(user.uid);
    setStatistics(updatedStatistics);
  };

  return (
    <Swiper
      loop={false}
      ref={paginationRef}
      index={1}
      renderPagination={(index) => <AppPagination selectedIndex={index} />}
    >
      <CreateTodoPage
        onCreate={async (title, date, description) => {
          await createTodo(user.uid, {
            title,
            description,
            expectedCompletionDate: date,
          });

          await fetchTodos();
          paginationRef.current?.scrollTo(1);
        }}
      />
      <TodoPage
        todos={todos}
        onRefresh={fetchTodos}
        isRefreshing={isLoading}
        user={user}
        markTodoCompleted={markTodoCompleted}
        markTodoUnfinished={markTodoUnfinished}
      />
      <SettingsPage statistics={statistics} />
    </Swiper>
  );
}
