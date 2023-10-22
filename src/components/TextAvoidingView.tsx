import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';

type TextInputAvoidingViewProps = {
  children: React.ReactNode;
};

const TextInputAvoidingView = ({children}: TextInputAvoidingViewProps) => {
  return Platform.OS === 'ios' ? (
    <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  ) : (
    <>{children}</>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default TextInputAvoidingView;
