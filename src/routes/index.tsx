import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';

const Stack = createStackNavigator();

interface NavigatorIndexProps {
  token?: string;
}

const Routes: React.FC<NavigatorIndexProps> = ({token}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? 'app.routes' : 'auth.routes'}
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="auth.routes" component={AuthRoutes} />
        <Stack.Screen name="app.routes" component={AppRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
