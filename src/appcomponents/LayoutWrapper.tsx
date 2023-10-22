import * as React from 'react';
import {
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {useTheme} from 'react-native-paper';

type LayoutProps = ScrollViewProps & {
  children: React.ReactNode;
  withScrollView?: boolean;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: ViewProps;
};

const Layout = ({
  children,
  withScrollView = true,
  style,
  contentContainerStyle,
  ...rest
}: LayoutProps) => {
  const theme = useTheme();

  const containerStyle = [
    styles.container,
    {
      backgroundColor: theme.colors.background,
    },
  ];

  return (
    <>
      {withScrollView ? (
        <ScrollView
          {...rest}
          keyboardShouldPersistTaps="never"
          alwaysBounceVertical={false}
          showsVerticalScrollIndicator={false}
          style={[containerStyle, style]}
          contentContainerStyle={contentContainerStyle}>
          {children}
        </ScrollView>
      ) : (
        <View style={[containerStyle, style]}>{children}</View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Layout;
