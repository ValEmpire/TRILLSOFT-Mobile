import React from 'react';
import HomeScreen from '../screens/app/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerMenus from '../components/Drawer';

const AppRoutes = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="app.home.screen"
      drawerContent={DrawerMenus}
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="app.home.screen" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default AppRoutes;
