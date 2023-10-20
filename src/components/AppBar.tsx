import React from 'react';
import {Appbar} from 'react-native-paper';
import {useAppNavigation} from '../util';
import {StyleSheet} from 'react-native';

interface AppBarProps {
  title: string;
  showMenu?: boolean;
}

const AppBar: React.FC<AppBarProps> = ({title, showMenu}) => {
  const {navigatePop} = useAppNavigation();

  return (
    <Appbar elevated mode="center-aligned" style={style.appbar}>
      <Appbar.BackAction onPress={() => navigatePop()} />
      <Appbar.Content title={title} />
      {showMenu && <Appbar.Action icon="dots-vertical" onPress={() => {}} />}
    </Appbar>
  );
};

const style = StyleSheet.create({
  appbar: {
    paddingTop: 17,
  },
});

export default AppBar;
