import React from 'react';
import TextInputAvoidingView from '../../../components/TextAvoidingView';
import Layout from '../../../components/LayoutWrapper';
import Text from '../../../components/Text';
import AppBar from '../../../components/AppBar';
import Box from '../../../components/Box';

const HomeScreen: React.FC = () => {
  return (
    <TextInputAvoidingView>
      <AppBar
        displayLogo
        title={<Text variant="titleLarge">Home</Text>}
        hideBackAction={true}
      />

      <Layout>
        <Box display="flex" pt={20} alignItems="center">
          <Text variant="displayLarge">HOMEs</Text>
        </Box>
      </Layout>
    </TextInputAvoidingView>
  );
};

export default HomeScreen;
