import React from 'react';
import {ViewProps, View, StyleSheet} from 'react-native';
import {MD3Theme, useTheme} from 'react-native-paper';

const Layout: React.FC<ViewProps> = props => {
  const theme = useTheme();

  return <View {...props} style={[styles(theme).container, props.style]} />;
};

const styles = (theme: MD3Theme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
};

export default Layout;
