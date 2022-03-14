import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList, RootTabParamList} from '../types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ScreenSettings,
  ScreenModal,
  ScreenTodoList,
  ScreenTasks,
} from '../screens';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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
        name="TodoLists"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tasks"
        component={ScreenTasks}
        options={({route}) => ({
          title: route.params.title,
          headerTitleAlign: 'center',
          headerStyle: {backgroundColor: '#d0923e'},
          headerTitleStyle: {color: '#8d522b', fontWeight: '800', fontSize: 26},
        })}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Modal" component={ScreenModal} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#d0923e',
          opacity: 0.7,
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          color: '#5e4131',
        },
        tabBarActiveBackgroundColor: '#d0923e',
      }}>
      <BottomTab.Screen
        name="Todolist"
        component={ScreenTodoList}
        options={{
          title: 'Список дел',
          tabBarIcon: () => <MaterialIcons name="note" size={30} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ScreenSettings}
        options={{
          title: 'Профиль',
          tabBarIcon: () => <MaterialIcons name="account-box" size={30} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
