import React from 'react';
import {
  Text as TextPaper,
  TextProps as TextPropsPaper,
  useTheme,
  MD3Theme,
} from 'react-native-paper';
import {TextProps, StyleSheet} from 'react-native';

interface CustomTextProps extends TextPropsPaper<TextProps> {
  primary?: boolean;
  secondary?: boolean;
}

type ActiveTextColorProps = 'primary' | 'secondary' | 'default';

const Text: React.FC<CustomTextProps> = props => {
  const theme = useTheme();

  const activeColor: ActiveTextColorProps = props.primary
    ? 'primary'
    : props.secondary
    ? 'secondary'
    : 'default';

  return (
    <TextPaper
      {...props}
      style={[styles(theme, activeColor).text, props.style]}
    />
  );
};

const styles = (theme: MD3Theme, activeColor: ActiveTextColorProps) => {
  return StyleSheet.create({
    text: {
      color:
        activeColor === 'default'
          ? theme.colors.onSurface
          : activeColor === 'primary'
          ? theme.colors.primary
          : theme.colors.secondary,
    },
  });
};

export default Text;
