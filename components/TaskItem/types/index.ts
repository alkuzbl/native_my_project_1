export type TaskItemPropsType = {
  title: string;
  id: string;
  isDone: boolean;
  changeStatus?: (isDone: boolean, taskId: string) => void;
  openEditMenu?: (title: string, taskId: string) => void;
};
