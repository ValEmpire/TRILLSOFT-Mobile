import {MMKV} from 'react-native-mmkv';
import {STORAGE_SECRET} from '@env';

// create moreStorage
const userStorage = new MMKV({
  id: `user-storage`,
  path: '/',
  encryptionKey: STORAGE_SECRET,
});

export interface userData {
  id: number;
  userName: string;
  email: string;
  token: string;
}

export const getUserData = (): userData | undefined => {
  const userData = userStorage.getString('user');

  if (userData) {
    return JSON.parse(userData);
  }

  return undefined;
};

export const setUserData = (data: userData): void => {
  const stringData = JSON.stringify(data);

  userStorage.set('user', stringData);
};

export const isDarkModeActive = (): boolean => {
  const isDarkMode = userStorage.getBoolean('isDarkMode') ?? false;

  return isDarkMode;
};

export const toggleActiveTheme = (): void => {
  const isDarkMode = userStorage.getBoolean('isDarkMode') ?? false;

  userStorage.set('activeTheme', !isDarkMode);
};

export const clearUserStorage = (): void => {
  userStorage.clearAll();
};
