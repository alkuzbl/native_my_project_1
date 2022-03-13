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
