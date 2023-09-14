import { Page } from "../app/page.component";
import { TodoItem } from "@/components/todos/todo-item.component";

export function TodoList(): JSX.Element {
  const todos = [];

  return (
    <Page title="Things you could pick up">
      {todos.map((item) => (
        <TodoItem isChecked={false} title={item.title} />
      ))}
    </Page>
  );
}
