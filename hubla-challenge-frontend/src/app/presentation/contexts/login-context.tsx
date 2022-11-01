import { createContext } from 'react';
import { LoginContextProps } from '~/app/domain/protocols';

export const LoginContext = createContext({} as LoginContextProps);
