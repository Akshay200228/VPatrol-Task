import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import FinalFoodList from '../screens/FinalFoodList';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{
            title: 'Main Screen',
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="FinalFoodList"
          component={FinalFoodList}
          options={{
            title: 'Final Food List',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
