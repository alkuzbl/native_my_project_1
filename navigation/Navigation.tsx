import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList, RootTabParamList} from '../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenTasksList} from '../screens/ScreenTasksList';
import {ScreenTodoList} from '../screens/ScreenTodoList';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Мой первый ежедневник"
        component={BottomTabNavigator}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Todolist"
        component={ScreenTodoList}
        options={{
          title: 'Список дел',
          tabBarIcon: () => <MaterialCommunityIcons name="account" />,
        }}
      />
      <BottomTab.Screen
        name="Tasks"
        component={ScreenTasksList}
        options={{
          title: 'Список задач',
          tabBarIcon: () => <MaterialCommunityIcons name="account" />,
        }}
      />
    </BottomTab.Navigator>
  );
};
