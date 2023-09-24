import { useMemo, useState } from "react";
import { FlatList, RefreshControl, StyleSheet, View } from "react-native";
import { User } from "firebase/auth";
import { Todo } from "@/types/todo.type";
import { Title } from "@/ui/title";
import { Text } from "@/ui/text";
import { Rating } from "@/types/rating.type";
import { setRating } from "@/backend/database/set-rating";
import { OverviewModal } from "@/components/todos/overview-modal.component";
import { Page } from "./page.component";
import { TodoItem } from "../todos/todo-item.component";
import { FeedbackModal } from "../todos/feedback-modal.component";

type TodoPageProps = {
  todos: Todo[];
  isRefreshing: boolean;
  onRefresh: () => void;
  user: User;
  markTodoCompleted: (id: string) => Promise<void>;
  markTodoUnfinished: (id: string) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
};

export function TodoPage({
  todos,
  isRefreshing,
  onRefresh: handleRefresh,
  user,
  markTodoCompleted,
  markTodoUnfinished,
  deleteTodo,
}: TodoPageProps): JSX.Element {
  const [completedTodo, setCompletedTodo] = useState<Todo | null>(null);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

  const sortedTodos = useMemo(
    () => todos.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted)),
    [todos],
  );

  const shouldShowFeedbackModal = completedTodo !== null;
  const shouldShowOverviewModal =
    shouldShowFeedbackModal === false && selectedTodo !== null;

  const handleTodoItemPress = async (item: Todo) => {
    if (item.isCompleted) {
      await markTodoUnfinished(item.id);
    } else {
      setCompletedTodo(item);
      await markTodoCompleted(item.id);
    }
  };

  const handleTodoItemLongPress = (item: Todo) => {
    setSelectedTodo(item);
  };

  return (
    <>
      {shouldShowFeedbackModal && (
        <FeedbackModal
          todo={completedTodo}
          onFeedbackClick={async (rating: Rating) => {
            await setRating(rating, user.uid, completedTodo.id);
            setCompletedTodo(null);
          }}
        />
      )}

      {shouldShowOverviewModal && (
        <OverviewModal
          todo={selectedTodo}
          onBackgroundPress={() => setSelectedTodo(null)}
          onChangeStatusPress={async () => {
            setSelectedTodo(null);
            await handleTodoItemPress(selectedTodo);
          }}
          onDeletePress={async () => {
            setSelectedTodo(null);
            await deleteTodo(selectedTodo.id);
          }}
        />
      )}

      <Page>
        <View style={styles.container}>
          <View style={styles.todo}>
            <Title hasBorder style={styles.title}>
              What to do today?
            </Title>
            {sortedTodos.length > 0 ? (
              <FlatList
                data={sortedTodos}
                renderItem={({ item }) => (
                  <TodoItem
                    data={item}
                    style={styles.item}
                    onPress={() => handleTodoItemPress(item)}
                    onLongPress={() => handleTodoItemLongPress(item)}
                  />
                )}
                keyExtractor={(item) => item.id}
                refreshControl={
                  <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={handleRefresh}
                  />
                }
              />
            ) : (
              <Text>You have no pending to-dos! Amazing!</Text>
            )}
          </View>
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
    height: "100%",
  },
  item: {
    marginBottom: 10,
  },
});
