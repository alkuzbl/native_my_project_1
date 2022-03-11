import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList, RootTabParamList} from '../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenSettings} from '../screens/ScreenSettings';
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
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="Todolist"
        component={ScreenTodoList}
        options={{
          title: 'Список дел',
          tabBarIcon: () => <MaterialCommunityIcons name="account" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={ScreenSettings}
        options={{
          title: 'Настройки',
          tabBarIcon: () => <MaterialCommunityIcons name="account" />,
        }}
      />
    </BottomTab.Navigator>
  );
};
