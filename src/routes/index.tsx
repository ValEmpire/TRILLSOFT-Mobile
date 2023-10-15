import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './Auth.route';

const Stack = createStackNavigator();

interface NavigatorIndexProps {
  token?: string;
}

const Routes: React.FC<NavigatorIndexProps> = ({token}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={token ? 'app.route' : 'auth.route'}
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="auth.route" component={AuthNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
