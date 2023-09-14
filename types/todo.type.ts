import { Rating } from "./rating.type";

type BaseTodo = {
  id: string;
  title: string;
  description: string;
  expectedCompletionDate: Date;
};

export type CompletedTodo = BaseTodo & {
  completionDate: Date;
  isCompleted: true;
  rating?: Rating;
};

export type UnfinishedTodo = BaseTodo & {
  isCompleted: false;
};

export type Todo = CompletedTodo | UnfinishedTodo;

export type TodoDto = {
  id: string;
  title: string;
  description: string;
  expectedCompletionDate: string;
  completionDate?: string;
  rating?: Rating;
};
