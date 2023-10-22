import React from 'react';
import Box from '../../../appcomponents/Box';
import {Image} from 'react-native';
import {loginLogoImage} from '../../../images';

const AuthLogo = () => (
  <Box mb={20}>
    <Image style={{height: 285, width: 272}} source={loginLogoImage} />
  </Box>
);

export default AuthLogo;
