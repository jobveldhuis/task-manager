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
  rating: Rating | null;
};

export type UnfinishedTodo = BaseTodo & {
  isCompleted: false;
  rating: null;
  completionDate: null;
};

export type Todo = CompletedTodo | UnfinishedTodo;
