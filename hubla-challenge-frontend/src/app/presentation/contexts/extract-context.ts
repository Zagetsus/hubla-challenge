import { createContext } from 'react';
import { ExtractContextProps } from '~/app/domain/protocols';

export const ExtractContext = createContext({} as ExtractContextProps);
