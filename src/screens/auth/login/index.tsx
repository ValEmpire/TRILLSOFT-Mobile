import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from '../../../components/Text';
import Box from '../../../components/Box';
import {Button, TextInput} from 'react-native-paper';
import {useAppNavigation} from '../../../util';
import Layout from '../../../components/LayoutWrapper';
import TextInputAvoidingView from '../../../components/TextAvoidingView';
import AuthLogo from '../../../components/AuthLogo';

const LoginScreen = () => {
  const {navigate} = useAppNavigation();

  return (
    <TextInputAvoidingView>
      <Layout centerContent={true}>
        <Box width={270} alignSelf="center">
          <AuthLogo />

          <Box mb={5}>
            <Text variant="headlineSmall">Please sign in</Text>
          </Box>

          <Box>
            <TextInput label="Username" mode="outlined" />
            <TextInput label="Password" mode="outlined" />
          </Box>

          <Box
            mt={10}
            display="flex"
            flexDirection="row"
            justifyContent="space-between">
            <Box>
              <TouchableOpacity onPress={() => navigate('register.screen')}>
                <Box pt={3} pb={3}>
                  <Text variant="labelSmall" primary>
                    Need to register?
                  </Text>
                </Box>
              </TouchableOpacity>
            </Box>
            <Box>
              <TouchableOpacity
                onPress={() => navigate('forgotpassword.screen')}>
                <Box pt={3} pb={3}>
                  <Text variant="labelSmall" primary>
                    Forgot password?
                  </Text>
                </Box>
              </TouchableOpacity>
            </Box>
          </Box>

          <Box mt={10}>
            <Button
              theme={{roundness: 1}}
              mode="contained"
              onPress={() => console.log('logging in')}>
              Login
            </Button>
          </Box>
        </Box>
      </Layout>
    </TextInputAvoidingView>
  );
};

export default LoginScreen;
