import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {FilterType} from '../redux/types';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  TodoLists: NavigatorScreenParams<RootTabParamList> | undefined;
  Tasks: {todoListId: string; title: string; filter: FilterType};
  Modal: undefined;
};

// типизация props для Stack
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// выделенная типизация для navigation
export type TasksScreenNavigatePropsType = RootStackScreenProps<
  'Tasks' | 'Modal'
>['navigation'];

// выделенная типизация для route
export type TasksScreenRoutePropsType = RootStackScreenProps<'Tasks'>['route'];

export type RootTabParamList = {
  Todolist: undefined;
  Profile: undefined;
};

// типизация props для Tab
export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
