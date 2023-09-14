import { Todo, TodoDto } from "../../types/todo.type";

export function mapTodoDtoToTodo(dto: TodoDto): Todo {
  const {
    id,
    title,
    description,
    completionDate,
    expectedCompletionDate,
    rating,
  } = dto;

  const mappedExpectedCompletionDate = new Date(expectedCompletionDate);
  const isCompleted = completionDate != null;

  const baseTodo = {
    id,
    title,
    description,
    expectedCompletionDate: mappedExpectedCompletionDate,
  };

  if (!isCompleted) {
    return {
      ...baseTodo,
      isCompleted,
    };
  }

  const mappedCompletionDate = new Date(completionDate);

  return {
    id,
    title,
    description,
    rating,
    expectedCompletionDate: mappedExpectedCompletionDate,
    completionDate: mappedCompletionDate,
    isCompleted,
  };
}
