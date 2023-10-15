import { useNavigation, StackActions } from '@react-navigation/native';

export const useAppNavigation = () => {
    const navigation = useNavigation();

    const { setOptions } = navigation;

    const navigate = (navigatorName: string, params = {}): void => {
        return navigation.navigate<never>(navigatorName as never, params as any);
    };

    const navigatePop = (count?: number) => {
        const popAction = StackActions.pop(count);

        return navigation.dispatch(popAction);
    };

    const navigateReplace = (navigatorName: string, params = {}) => {
        navigation.dispatch(StackActions.replace(navigatorName, params));
    };

    return { navigate, navigation, navigatePop, navigateReplace, setOptions };
};