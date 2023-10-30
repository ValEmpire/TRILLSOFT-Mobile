import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/auth/login';
import RegisterScreen from '../screens/auth/register';
import ForgotPasswordScreen from '../screens/auth/forgotpassword';

const AuthRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="auth.login.screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="auth.login.screen" component={LoginScreen} />
      <Stack.Screen name="auth.register.screen" component={RegisterScreen} />
      <Stack.Screen
        name="auth.forgotpassword.screen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
