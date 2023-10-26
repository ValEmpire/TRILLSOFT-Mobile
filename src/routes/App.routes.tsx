import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import HomeScreen from '../screens/app/home';

const AppRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="app.home.screen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="app.home.screen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppRoutes;
