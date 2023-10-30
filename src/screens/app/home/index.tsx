import React from 'react';
import TextInputAvoidingView from '../../../components/TextAvoidingView';
import Layout from '../../../components/LayoutWrapper';
import Text from '../../../components/Text';
import AppBar from '../../../components/AppBar';
import {Button} from 'react-native-paper';
import {useAppDispatch} from '../../../redux/appHooks';
import {logoutUser} from '../../../redux/actions/user.action';
import {useAppNavigation} from '../../../util';

const HomeScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {navigateReplace} = useAppNavigation();

  const handleLogout = () => {
    dispatch(
      logoutUser(success => {
        if (success) {
          navigateReplace('auth.routes', {
            screen: 'auth.login.screen.',
          });
        }
      }),
    );
  };

  return (
    <TextInputAvoidingView>
      <AppBar
        displayLogo
        title={<Text variant="titleLarge">Home</Text>}
        hideBackAction={true}
      />

      <Layout>
        <Button mode="contained" elevation={5} onPress={handleLogout}>
          Signout
        </Button>
      </Layout>
    </TextInputAvoidingView>
  );
};

export default HomeScreen;
