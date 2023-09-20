import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { User } from "firebase/auth";
import { Todo } from "@/types/todo.type";
import { Title } from "@/ui/title";
import { Text } from "@/ui/text";
import { Rating } from "@/types/rating.type";
import { setRating } from "@/backend/database/set-rating";
import { Page } from "./page.component";
import { TodoItem } from "../todos/todo-item.component";
import { FeedbackModal } from "../todos/feedback-modal.component";

type TodoPageProps = {
  todos: Todo[];
  user: User;
  markTodoCompleted: (id: string) => Promise<void>;
  markTodoUnfinished: (id: string) => Promise<void>;
};

export function TodoPage({
  todos,
  user,
  markTodoCompleted,
  markTodoUnfinished,
}: TodoPageProps): JSX.Element {
  const [completedTodo, setCompletedTodo] = useState<Todo | null>(null);

  const completedTodos = todos.filter((item) => item.completionDate != null);
  const unfinishedTodos = todos.filter((item) => item.completionDate == null);

  const shouldShowModal = completedTodo !== null;
  const shouldShowCompletedToday = completedTodos.length > 0;

  return (
    <>
      {shouldShowModal && (
        <FeedbackModal
          todo={completedTodo}
          onFeedbackClick={async (rating: Rating) => {
            await setRating(rating, user.uid, completedTodo.id);
            setCompletedTodo(null);
          }}
        />
      )}

      <Page>
        <View style={{ maxHeight: "100%" }}>
          <View style={styles.todo}>
            <Title hasBorder style={styles.title}>
              Things you could pick up
            </Title>
            <ScrollView>
              {unfinishedTodos.length > 0 ? (
                unfinishedTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    data={todo}
                    onPress={() => {
                      setCompletedTodo(todo);
                      return markTodoCompleted(todo.id);
                    }}
                  />
                ))
              ) : (
                <Text>You have no pending to-dos! Amazing!</Text>
              )}
            </ScrollView>
          </View>

          {shouldShowCompletedToday && (
            <View style={styles.completed}>
              <Title hasBorder style={styles.title}>
                Completed today
              </Title>
              <ScrollView>
                {completedTodos.map((todo) => (
                  <TodoItem
                    key={todo.id}
                    data={todo}
                    onPress={() => markTodoUnfinished(todo.id)}
                  />
                ))}
              </ScrollView>
            </View>
          )}
        </View>
      </Page>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingBottom: 8,
    marginBottom: 16,
  },
  todo: {
    flexBasis: "auto",
    flexShrink: 1,
    flexGrow: 0,
  },
  completed: {
    flexBasis: "50%",
  },
});
