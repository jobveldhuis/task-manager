import Swiper from "react-native-swiper";
import { useAuthentication } from "@/backend/authentication";
import { useEffect } from "react";
import { hasSeenTutorial } from "@/util/has-seen-tutorial";
import { router } from "expo-router";
import { AppPagination } from "@/components/app/app-pagination.component";
import { TodoList } from "@/components/todos/todo-list.component";
import { CreateTodo } from "@/components/app/create-todo.component";
import { Settings } from "@/components/app/settings.component";

export default function Main(): JSX.Element {
  const { user } = useAuthentication();

  useEffect(() => {
    if (user === null) return;

    const redirectIfNotSeenTutorial = async () => {
      const hasSeen = await hasSeenTutorial(user.uid);
      if (!hasSeen) {
        router.replace("/(app)/tutorial");
      }
    };

    redirectIfNotSeenTutorial();
  }, [user]);

  return (
    <Swiper
      loop={false}
      index={1}
      paginationStyle={{ backgroundColor: "red" }}
      renderPagination={(index) => <AppPagination selectedIndex={index} />}
    >
      <CreateTodo />
      <TodoList />
      <Settings />
    </Swiper>
  );
}
