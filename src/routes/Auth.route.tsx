import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import ForgotPasswordScreen from '../screens/forgotpassword';

const AuthRoute = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="login.screen"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="login.screen" component={LoginScreen} />
      <Stack.Screen name="register.screen" component={RegisterScreen} />
      <Stack.Screen
        name="forgotpassword.screen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthRoute;
