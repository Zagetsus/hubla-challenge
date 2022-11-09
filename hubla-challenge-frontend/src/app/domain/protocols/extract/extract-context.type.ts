import { Dispatch, SetStateAction } from 'react';
import { ExtractContextStateProps } from '~/app/domain/protocols';
import { LoadTransactions } from '~/app/domain/usecases/extract';

export type ExtractContextProps = {
  transactionsResponse: LoadTransactions.Response;
  contextState: ExtractContextStateProps;
  setContextState: Dispatch<SetStateAction<ExtractContextStateProps>>;
};
