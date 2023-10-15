import React from 'react';
import {FlexAlignType, StyleSheet, View, ViewProps} from 'react-native';

interface BoxProps extends ViewProps {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | undefined;
  alignContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around'
    | undefined;
  elevation?: number;
  display?: 'none' | 'flex' | undefined;
  alignItems?: FlexAlignType;
  width?: number;
  flex?: number;
}

const Box: React.FC<BoxProps> = props => {
  return (
    <View {...props} style={[props.style, style(props).boxProps]}>
      {props.children}
    </View>
  );
};

const style = (props: BoxProps) => {
  return StyleSheet.create({
    boxProps: {
      marginTop: props.mt,
      marginBottom: props.mb,
      marginLeft: props.ml,
      marginRight: props.mr,
      paddingTop: props.pt,
      paddingBottom: props.pb,
      paddingLeft: props.pl,
      paddingRight: props.pr,
      alignItems: props.alignItems,
      alignContent: props.alignContent,
      elevation: props.elevation,
      display: props.display,
      flexDirection: props.flexDirection,
      justifyContent: props.justifyContent,
      width: props.width,
      flex: props.flex,
    },
  });
};

export default Box;
