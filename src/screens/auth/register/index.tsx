import React from 'react';
import Box from '../../../appcomponents/Box';
import {Button, TextInput} from 'react-native-paper';
import AppBar from '../../../appcomponents/AppBar';
import Layout from '../../../appcomponents/LayoutWrapper';
import TextInputAvoidingView from '../../../appcomponents/TextAvoidingView';
import AuthLogo from '../../../appcomponents/AuthLogo';

const RegisterScreen = () => {
  return (
    <TextInputAvoidingView>
      <AppBar title="Forgot Password" />

      <Layout centerContent={true}>
        <Box width={270} alignSelf="center">
          <AuthLogo />

          <Box mb={5} />

          <Box>
            <TextInput label="Email" mode="outlined" />
            <TextInput label="Username" mode="outlined" />
            <TextInput label="Password" mode="outlined" />
            <TextInput label="Repeat password" mode="outlined" />
          </Box>

          <Box mt={10} />

          <Box mt={10}>
            <Button theme={{roundness: 1}} mode="contained">
              Register
            </Button>
          </Box>
        </Box>
      </Layout>
    </TextInputAvoidingView>
  );
};

export default RegisterScreen;
