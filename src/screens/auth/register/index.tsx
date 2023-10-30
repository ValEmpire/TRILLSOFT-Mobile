import React from 'react';
import Box from '../../../components/Box';
import {Button, TextInput} from 'react-native-paper';
import AppBar from '../../../components/AppBar';
import Layout from '../../../components/LayoutWrapper';
import TextInputAvoidingView from '../../../components/TextAvoidingView';
import AuthLogo from '../../../components/AuthLogo';
import Text from '../../../components/Text';

const RegisterScreen = () => {
  return (
    <TextInputAvoidingView>
      <AppBar title={<Text variant="titleLarge">Register</Text>} />

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
