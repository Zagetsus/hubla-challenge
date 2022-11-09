import { useContext } from 'react';
import { ExtractContext } from '~/app/presentation/contexts';

export const useExtractContext = () => {
  const context = useContext(ExtractContext);

  if (!context)
    throw new Error('useExtractContext must be used within ExtractProvider');

  return context;
};
