import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
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
        <View style={styles.container}>
          <View style={styles.todo}>
            <Title hasBorder style={styles.title}>
              Things you could pick up
            </Title>
            {unfinishedTodos.length > 0 ? (
              <FlatList
                data={unfinishedTodos}
                renderItem={({ item }) => (
                  <TodoItem
                    data={item}
                    onPress={async () => {
                      setCompletedTodo(item);
                      await markTodoCompleted(item.id);
                    }}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            ) : (
              <Text>You have no pending to-dos! Amazing!</Text>
            )}
          </View>

          {shouldShowCompletedToday && (
            <View style={styles.completed}>
              <Title hasBorder style={styles.title}>
                Completed today
              </Title>
              <FlatList
                data={completedTodos}
                renderItem={({ item }) => (
                  <TodoItem
                    data={item}
                    onPress={() => markTodoUnfinished(item.id)}
                  />
                )}
                keyExtractor={(item) => item.id}
              />
            </View>
          )}
        </View>
      </Page>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
  },
  title: {
    paddingBottom: 8,
    marginBottom: 16,
  },
  todo: {
    minHeight: "50%",
    flexBasis: "auto",
    flexShrink: 1,
    flexGrow: 0,
  },
  completed: {
    flexBasis: "50%",
  },
  list: {
    display: "flex",
    gap: 10,
  },
});
