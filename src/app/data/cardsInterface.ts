import { TasksInterface } from './tasksInterface';

export interface CardsInterface {
  id:number;
  title: string;
  todos:TasksInterface;
}
