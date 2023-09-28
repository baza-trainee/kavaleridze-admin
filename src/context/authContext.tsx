import { FC, PropsWithChildren, createContext, useState } from 'react';

import { IAdmin } from '@/types/context';

//ToDo: add singIn and signOut fn type
interface AuthContextType {
  user: IAdmin | null;
  signIn: () => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

const localStorageKey = 'admin';

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IAdmin | null>(() => {
    const admin = localStorage.getItem(localStorageKey);
    return admin ? JSON.parse(admin) : null;
  });

  const signIn = () => {
    //ToDo: change to request for sing in
    const admin = { id: 'admin', name: 'admin' };
    localStorage.setItem(localStorageKey, JSON.stringify(admin));
    setUser(admin);
  };

  const signOut = () => {
    //ToDo: add request for sign out
    localStorage.removeItem(localStorageKey);
    setUser(null);
  };

  const value = { user, signIn, signOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
