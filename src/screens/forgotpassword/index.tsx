import React from 'react';
import Layout from '../../components/Layout';
import {Image} from 'react-native';
import {loginLogoImage} from '../../images';
import Text from '../../components/Text';
import Box from '../../components/Box';
import {Button, TextInput} from 'react-native-paper';
import DismissKeyboard from '../../components/DismissKeyboard';
import AppBar from '../../components/AppBar';

const ForgotPasswordScreen = () => {
  return (
    <DismissKeyboard>
      <Layout>
        <AppBar title="Forgot Password" />
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center">
          <Box>
            <Box mb={20}>
              <Image
                style={{height: 250, width: 240}}
                source={loginLogoImage}
              />
            </Box>

            <Box mb={5}>
              <Text variant="headlineSmall">Forgot password</Text>
            </Box>

            <Box>
              <TextInput label="Username" mode="outlined" />
              <TextInput label="Resetcode" mode="outlined" />
              <TextInput label="New Password" mode="outlined" />
              <TextInput label="Repeat new password" mode="outlined" />
            </Box>

            <Box mt={10} />

            <Box mt={10}>
              <Button theme={{roundness: 1}} mode="contained">
                Reset Password
              </Button>
            </Box>
          </Box>
        </Box>
      </Layout>
    </DismissKeyboard>
  );
};

export default ForgotPasswordScreen;
