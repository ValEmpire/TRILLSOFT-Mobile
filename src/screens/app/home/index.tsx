import React from 'react';
import TextInputAvoidingView from '../../../components/TextAvoidingView';
import Layout from '../../../components/LayoutWrapper';
import Text from '../../../components/Text';

const HomeScreen: React.FC = () => {
  return (
    <TextInputAvoidingView>
      <Layout>
        <Text variant="headlineMedium" primary>
          HOME SCREEN
        </Text>
      </Layout>
    </TextInputAvoidingView>
  );
};

export default HomeScreen;
