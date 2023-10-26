import {UserDataProps, setUserData} from '../../storage/user.storage';

interface LoginUserProps {
  userName: string;
  password: string;
}

export const loginUser =
  (loginUser: LoginUserProps, cb: (success: boolean) => void) => async () => {
    try {
      const userData: UserDataProps = {
        email: 'fake@fake.com',
        id: 1,
        token: 'fakeToken',
        userName: loginUser.userName,
      };

      setUserData(userData);

      cb(true);
    } catch (err) {}
  };
