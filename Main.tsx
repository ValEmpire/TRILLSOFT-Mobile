import React, {ReactElement, useState, useEffect} from 'react';
import {PaperProvider, MD3DarkTheme, MD3LightTheme} from 'react-native-paper';
import colors from './src/themes/colors.json';
import {getUserData} from './src/storage/user.storage';
import {useAppDispatch, useAppSelector} from './src/redux/appHooks';
import {setActiveThemeMode} from './src/redux/actions/setting.action';
import {Text} from 'react-native';

interface MainProps {
  children: ReactElement<any>;
}

const Main: React.FC<MainProps> = ({children}) => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const settings = useAppSelector(state => state.setting);
  const isDarkMode = settings.isDarkMode;
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const init = async () => {
      dispatch(setActiveThemeMode());
      const user = getUserData();

      if (user) {
        setToken(user.token);
      }
    };

    init().finally(() => {
      setLoading(false);
    });
  }, [dispatch]);

  const paperTheme = isDarkMode
    ? {...MD3DarkTheme, colors: colors.darkTheme}
    : {...MD3LightTheme, colors: colors.lightTheme};

  if (loading) return <Text>...loading</Text>;

  return (
    <PaperProvider theme={paperTheme}>
      <>{React.cloneElement(children, {token})}</>
    </PaperProvider>
  );
};

export default Main;
