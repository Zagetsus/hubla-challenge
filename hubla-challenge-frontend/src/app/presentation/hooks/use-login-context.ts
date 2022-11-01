import { useContext } from 'react';
import { LoginContext } from '~/app/presentation/contexts';

export const useLoginContext = () => {
  const context = useContext(LoginContext);

  if (!context) {
    throw new Error('useLoginContext must be used within LoginProvider');
  }

  return context;
};
