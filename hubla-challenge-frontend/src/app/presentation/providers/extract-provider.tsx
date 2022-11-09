import { useState, ReactNode } from 'react';
import { ExtractContextStateProps } from '~/app/domain/protocols';
import { LoadBalance, LoadTransactions } from '~/app/domain/usecases/extract';
import { ExtractContext } from '~/app/presentation/contexts';

type ExtractProviderProps = {
  balanceResponse: LoadBalance.Response;
  transactionsResponse: LoadTransactions.Response;
  children: ReactNode;
};

export const ExtractProvider = ({
  balanceResponse,
  transactionsResponse,
  children
}: ExtractProviderProps) => {
  const [contextState, setContextState] = useState<ExtractContextStateProps>({
    balanceResponse
  });

  return (
    <ExtractContext.Provider
      value={{
        contextState,
        setContextState,
        transactionsResponse
      }}
    >
      {children}
    </ExtractContext.Provider>
  );
};
