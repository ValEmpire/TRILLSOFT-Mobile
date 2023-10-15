import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import Main from './Main';
import {store} from './src/redux/store';
import RNBootSplash from 'react-native-bootsplash';
import Routes from './src/routes';

function App(): JSX.Element {
  useEffect(() => {
    const hideSplash = async () => {
      await RNBootSplash.hide();
    };

    hideSplash();
  }, []);

  return (
    <Provider store={store}>
      <Main>
        <Routes />
      </Main>
    </Provider>
  );
}

export default App;
