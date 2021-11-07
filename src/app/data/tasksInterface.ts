export interface TasksInterface {
  id: number;
  text: string;
  isCompleted: boolean;
}

export interface TasksConstructor {
  new(id: number, text: string, isCompleted: boolean): TasksInterface;
  clone(): TasksInterface;
}

export let TasksInterface: TasksConstructor;
