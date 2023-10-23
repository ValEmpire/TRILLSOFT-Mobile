import React from 'react';
import {Appbar, useTheme} from 'react-native-paper';
import {useAppNavigation} from '../util';
import {StatusBar, StyleSheet} from 'react-native';
import Text from './Text';

interface AppBarProps {
  title: string;
  showMenu?: boolean;
}

const AppBar: React.FC<AppBarProps> = ({title, showMenu}) => {
  const {navigatePop} = useAppNavigation();
  const theme = useTheme();

  return (
    <>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Appbar.Header elevated mode="center-aligned" style={{height: 40}}>
        <Appbar.BackAction onPress={() => navigatePop()} />
        <Appbar.Content title={<Text variant="titleLarge">{title}</Text>} />
        {showMenu && <Appbar.Action icon="dots-vertical" onPress={() => {}} />}
      </Appbar.Header>
    </>
  );
};

export default AppBar;
