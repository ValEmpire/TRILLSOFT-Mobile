import { Action } from 'redux';
import { SET_ACTIVE_THEME_MODE } from '../../const';

export const initialState = {
    isDarkMode: false,
};

interface InitialStateProp {
    isDarkMode: boolean;
}

interface ThemeModeAction {
    type: typeof SET_ACTIVE_THEME_MODE;
    payload: boolean;
}

type SettingsActions = ThemeModeAction;

export const setting = (
    state: InitialStateProp = initialState,
    incomingAction: Action,
) => {
    const action = incomingAction as SettingsActions;

    switch (action.type) {
        case SET_ACTIVE_THEME_MODE:
            return {
                ...state,
                isDarkMode: action.payload,
            };

        default:
            return { ...state };
    }
};