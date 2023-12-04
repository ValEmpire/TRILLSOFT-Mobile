import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {useTheme} from 'react-native-paper';

export const LogoutIcon = () => {
  const theme = useTheme();

  return (
    <MaterialIcon name="logout" color={theme.colors.onSurface} size={25} />
  );
};

export const SwitchIcon = () => {
  const theme = useTheme();
  const isDarkMode = theme.dark;

  return (
    <MaterialIcon
      name={isDarkMode ? 'toggle-switch-outline' : 'toggle-switch-off-outline'}
      color={theme.colors.onSurface}
      size={25}
    />
  );
};
