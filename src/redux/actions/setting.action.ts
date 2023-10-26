import {Dispatch} from 'redux';
import {SET_ACTIVE_THEME_MODE} from '../../const';
import {isDarkModeActive, toggleActiveTheme} from '../../storage/user.storage';

export const setActiveThemeMode = () => (dispatch: Dispatch) => {
  try {
    const activeThemeMode: boolean = isDarkModeActive();

    dispatch({
      type: SET_ACTIVE_THEME_MODE,
      payload: activeThemeMode,
    });
  } catch (err) {}
};

export const toggleTheme = () => (dispatch: Dispatch) => {
  try {
    let activeThemeMode: boolean = isDarkModeActive();

    toggleActiveTheme();

    dispatch({
      type: SET_ACTIVE_THEME_MODE,
      payload: !activeThemeMode,
    });
  } catch (err) {}
};
