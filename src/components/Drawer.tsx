import React from 'react';
import {Drawer, Switch} from 'react-native-paper';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import Layout from './LayoutWrapper';
import {useAppDispatch} from '../redux/appHooks';
import {logoutUser} from '../redux/actions/user.action';
import {useAppNavigation} from '../util';
import {LogoutIcon, SwitchIcon} from './Icons';
import {toggleTheme} from '../redux/actions/setting.action';

const DrawerMenus: React.FC = () => {
  const [active, setActive] = React.useState('');
  const dispatch = useAppDispatch();
  const {navigateReplace} = useAppNavigation();

  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleLogout = () => {
    dispatch(
      logoutUser(success => {
        if (success) {
          navigateReplace('auth.routes', {
            screen: 'auth.login.screen.',
          });
        }
      }),
    );
  };

  return (
    <Layout withScrollView={false}>
      <DrawerContentScrollView>
        <Drawer.Section title="Trillsoft Main Menu">
          <Drawer.Item
            label="First Item"
            active={active === 'first'}
            icon="star"
            onPress={() => setActive('first')}
          />
          <Drawer.Item
            label="Dark Mode"
            onPress={handleTheme}
            right={() => <SwitchIcon />}
          />
        </Drawer.Section>
        <Drawer.Item
          label="Logout"
          onPress={handleLogout}
          right={() => <LogoutIcon />}
        />
      </DrawerContentScrollView>
    </Layout>
  );
};

export default DrawerMenus;
