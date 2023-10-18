import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from 'react';
import { instance, login, logout } from '@/api';

//ToDo: add singIn and signOut fn type
interface AuthContextType {
  isAuth: boolean;
  signIn: (username: string, password: string) => Promise<boolean>;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const localStorageKey = 'auth';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useState<string | null>(() => {
    const token = localStorage.getItem(localStorageKey);
    return token ? token : null;
  });
  const [isAuth, setIsAuth] = useState(() => {
    const admin = localStorage.getItem(localStorageKey);
    return !!admin;
  });

  useEffect(() => {
    if (token) {
      //ToDo: change to token
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  });

  const signIn = async (username: string, password: string) => {
    //ToDo: change to request for sing in

    try {
      const {
        data: { token },
      } = await login(username, password);

      setToken(token);
      localStorage.setItem(localStorageKey, token);
      instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setIsAuth(true);
      return true;
    } catch (error) {
      localStorage.removeItem(localStorageKey);
      setToken(null);
      setIsAuth(false);
      instance.defaults.headers.common['Authorization'] = undefined;
      return false;
    }
  };

  const signOut = async () => {
    //ToDo: add request for sign out
    await logout();
    localStorage.removeItem(localStorageKey);
    setToken(null);
    setIsAuth(false);
    instance.defaults.headers.common['Authorization'] = undefined;
  };

  const value = { isAuth, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
