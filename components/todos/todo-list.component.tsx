import { Page } from "../app/page.component";
import { getTodosByUser } from "@/backend/database/get-todos-by-user";
import { useAuthentication } from "@/backend/authentication";
import { useEffect, useState } from "react";
import { Todo } from "@/types/todo.type";
import { TodoItem } from "@/components/todos/todo-item.component";
import { FullPageSpinner } from "@/ui/full-page-spinner";

export function TodoList(): JSX.Element {
  const { user } = useAuthentication();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user === null) return;

    getTodosByUser(user.uid).then((result) => setTodos(result));
    setIsLoading(false);
  }, [user]);

  return (
    <Page title="Things you could pick up">
      {isLoading ? (
        <FullPageSpinner />
      ) : (
        todos.map(({ id, title, isCompleted }) => (
          <TodoItem key={id} id={id} isChecked={isCompleted} title={title} />
        ))
      )}
    </Page>
  );
}
