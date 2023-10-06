import { FC, PropsWithChildren, createContext, useState } from 'react';
import { instance } from '@/api';
import { IAdmin } from '@/types/context';

//ToDo: add singIn and signOut fn type
interface AuthContextType {
  user: IAdmin | null;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const localStorageKey = 'name';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IAdmin | null>(() => {
    const admin = localStorage.getItem(localStorageKey);
    return admin
      ? { username: 'root', password: 'password', role: ['admin'] }
      : null;
  });

  const signIn = () => {
    //ToDo: change to request for sing in
    const admin = { username: 'root', password: 'password', role: ['admin'] };
    localStorage.setItem(localStorageKey, admin.username);
    setUser(admin);
    instance.defaults.auth = { username: 'root', password: 'password' };
  };

  const signOut = () => {
    //ToDo: add request for sign out
    localStorage.removeItem(localStorageKey);
    setUser(null);
    instance.defaults.auth = undefined;
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
