import React from 'react';
import {Keyboard, TouchableWithoutFeedback} from 'react-native';

interface DismissKeyboardProps {
  children: React.ReactNode;
}

const DismissKeyboard: React.FC<DismissKeyboardProps> = ({children}) => {
  const handleKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback style={{flex: 1}} onPress={handleKeyboard}>
      {children}
    </TouchableWithoutFeedback>
  );
};

export default DismissKeyboard;
