import React from 'react';
import {Appbar} from 'react-native-paper';
import {useAppNavigation} from '../util';

interface AppBarProps {
  title: string;
  showMenu?: boolean;
}

const AppBar: React.FC<AppBarProps> = ({title, showMenu}) => {
  const {navigatePop} = useAppNavigation();

  return (
    <Appbar elevated mode="small">
      <Appbar.BackAction onPress={() => navigatePop()} />
      <Appbar.Content title={title} />
      {showMenu && <Appbar.Action icon="dots-vertical" onPress={() => {}} />}
    </Appbar>
  );
};

export default AppBar;
