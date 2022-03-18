import {createAsyncThunk} from '@reduxjs/toolkit';
import {TASKS} from '../../constans';
import {tasksAPI} from '../../dal/tasks-api';
import {setStatusTask} from '../slices';
import {ModelTaskType, TaskStatuses} from '../../dal/types';
import {TaskType} from '../../redux/types';
import {AppDispatch, RootState} from '../../redux/store';

export const updateTask = createAsyncThunk<
  TaskType,
  {
    todoListId: string;
    taskId: string;
    model: {title?: string; status?: TaskStatuses};
  },
  {
    dispatch: AppDispatch;
    state: RootState;
  }
>(
  `${TASKS}/updateTask`,
  async (data, {rejectWithValue, dispatch, getState}) => {
    dispatch(
      setStatusTask({
        taskId: data.taskId,
        todoListId: data.todoListId,
        taskStatus: 'loading',
      }),
    );
    let model: ModelTaskType;

    const task = getState().tasks.tasks[data.todoListId].find(
      item => item.id === data.taskId,
    );

    if (task) {
      model = {
        status: task.status,
        title: task.title,
        description: task.description,
        priority: task.priority,
        startDate: task.startDate,
        deadline: task.deadline,
      };
    }

    try {
      const response = await tasksAPI.updateTask(data.todoListId, data.taskId, {
        ...model!, //пофиксить
        ...data.model,
      });

      if (response.data.resultCode === 0) {
        return {...response.data.data.item, taskStatus: 'succeed'};
      }
      dispatch(
        setStatusTask({
          taskId: data.taskId,
          todoListId: data.todoListId,
          taskStatus: 'failed',
        }),
      );

      return rejectWithValue(response.data.messages[0]);
    } catch (err) {
      dispatch(
        setStatusTask({
          taskId: data.taskId,
          todoListId: data.todoListId,
          taskStatus: 'failed',
        }),
      );
      return rejectWithValue(['Что то пошло не так, попробуйте еще раз', err]);
    }
  },
);
