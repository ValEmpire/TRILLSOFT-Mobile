import React from 'react';
import {Appbar, AppbarActionProps, useTheme} from 'react-native-paper';
import {useAppNavigation} from '../util';
import {Image, StatusBar} from 'react-native';
import Text from './Text';
import {loginLogoImage} from '../images';
import Box from './Box';
import {getUserData} from '../storage/user.storage';
import {DrawerActions} from '@react-navigation/native';

interface AppBarProps {
  title?: React.JSX.Element | string;
  hideBackAction?: boolean;
  Actions?: AppbarActionProps[];
  displayLogo?: boolean;
}

const AppBar: React.FC<AppBarProps> = ({
  title,
  hideBackAction = false,
  Actions,
  displayLogo = false,
}) => {
  const {navigatePop, navigation} = useAppNavigation();
  const theme = useTheme();
  const userData = getUserData();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Appbar.Header elevated mode={'center-aligned'} style={{height: 40}}>
        {!hideBackAction && <Appbar.BackAction onPress={() => navigatePop()} />}

        {userData && <Appbar.Action icon={'menu'} onPress={toggleDrawer} />}

        {displayLogo && <Appbar.Content title={''} />}

        {title && <Appbar.Content title={title} />}

        {userData && (
          <Appbar.Content
            title={<Text variant="titleMedium">{userData.userName}</Text>}
            style={{alignItems: 'flex-end'}}
          />
        )}

        {displayLogo && (
          <Box pl={10} pr={10} ml={4} mr={4}>
            <Image style={{height: 25, width: 25}} source={loginLogoImage} />
          </Box>
        )}

        {Actions &&
          Actions.length > 0 &&
          Actions.map((Action, i) => <Appbar.Action key={i} {...Action} />)}
      </Appbar.Header>
    </>
  );
};

export default AppBar;
