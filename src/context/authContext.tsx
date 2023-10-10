import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { instance, login, logout } from '@/api';
import { IAdmin } from '@/types/context';

//ToDo: add singIn and signOut fn type
interface AuthContextType {
  user: IAdmin | null;
  signIn: (username: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const localStorageKey = 'auth';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IAdmin | null>(() => {
    const admin = localStorage.getItem(localStorageKey);
    return admin ? JSON.parse(admin) : null;
  });


  useEffect(() => {
    if (user) {
      //ToDo: change to token
      instance.defaults.auth = {
        username: user.username,
        password: user.password,
      };
      instance.defaults.withCredentials = true;
    }
  });

  const signIn = async (username: string, password: string) => {
    //ToDo: change to request for sing in

    try {
      const {
        data: { roles },
      } = await login(username, password);
      const user = { username, password, roles };
      setUser(user);
      //ToDo: change to token
      instance.defaults.auth = { username, password };
      instance.defaults.withCredentials = true;
      localStorage.setItem(localStorageKey, JSON.stringify(user));

      return true;
    } catch (error) {
      return false;
    }
  };

  const signOut = async () => {
    //ToDo: add request for sign out
    await logout();
    localStorage.removeItem(localStorageKey);
    setUser(null);
    instance.defaults.auth = undefined;
    instance.defaults.withCredentials = false;
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
