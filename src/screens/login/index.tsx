import React from 'react';
import Layout from '../../components/Layout';
import {Image, TouchableOpacity} from 'react-native';
import {loginLogoImage} from '../../images';
import Text from '../../components/Text';
import Box from '../../components/Box';
import {Button, TextInput} from 'react-native-paper';
import DismissKeyboard from '../../components/DismissKeyboard';
import {useAppNavigation} from '../../util';

const LoginScreen = () => {
  const {navigate} = useAppNavigation();

  return (
    <DismissKeyboard>
      <Layout
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box>
          <Box mb={20}>
            <Image style={{height: 250, width: 240}} source={loginLogoImage} />
          </Box>

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
                <Text variant="labelSmall" primary>
                  Need to register?
                </Text>
              </TouchableOpacity>
            </Box>
            <Box>
              <TouchableOpacity
                onPress={() => navigate('forgotpassword.screen')}>
                <Text variant="labelSmall" primary>
                  Forgot password?
                </Text>
              </TouchableOpacity>
            </Box>
          </Box>

          <Box mt={10}>
            <Button theme={{roundness: 1}} mode="contained">
              Login
            </Button>
          </Box>
        </Box>
      </Layout>
    </DismissKeyboard>
  );
};

export default LoginScreen;
