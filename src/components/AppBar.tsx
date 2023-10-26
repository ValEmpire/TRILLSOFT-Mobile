import React from 'react';
import {Appbar, AppbarActionProps, useTheme} from 'react-native-paper';
import {useAppNavigation} from '../util';
import {StatusBar} from 'react-native';
import Text from './Text';

interface AppBarProps {
  title?: string;
  hideBackAction?: boolean;
  Actions?: [AppbarActionProps];
}

const AppBar: React.FC<AppBarProps> = ({
  title,
  hideBackAction = false,
  Actions,
}) => {
  const {navigatePop} = useAppNavigation();
  const theme = useTheme();

  return (
    <>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
      <Appbar.Header elevated mode="center-aligned" style={{height: 40}}>
        {!hideBackAction && <Appbar.BackAction onPress={() => navigatePop()} />}
        {title && (
          <Appbar.Content title={<Text variant="titleLarge">{title}</Text>} />
        )}
        {Actions &&
          Actions.length > 0 &&
          Actions.map((Action, i) => <Appbar.Action key={i} {...Action} />)}
      </Appbar.Header>
    </>
  );
};

export default AppBar;
