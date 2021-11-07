import { TasksInterface } from './tasksInterface';

export interface CardsInterface {
  id: number;
  title: string;
  todos: TasksInterface[];
}

export interface CardsConstructor {
  new(id: number, title: string, todos: TasksInterface): CardsInterface;
  clone(): CardsInterface;
}

export let CardsInterface: CardsConstructor;
