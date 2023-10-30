import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthRoutes from './Auth.routes';
import AppRoutes from './App.routes';

const Stack = createStackNavigator();

interface NavigatorIndexProps {
  token?: string;
}

const Routes: React.FC<NavigatorIndexProps> = ({token}) => {
  const initialRoute = token ? 'app.routes' : 'auth.routes';

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="auth.routes" component={AuthRoutes} />
        <Stack.Screen name="app.routes" component={AppRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
