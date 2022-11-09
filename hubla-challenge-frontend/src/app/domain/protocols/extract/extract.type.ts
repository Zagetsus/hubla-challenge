import { LoadBalance, LoadTransactions } from '~/app/domain/usecases/extract';

export type ExtractProps = {
  balanceResponse: LoadBalance.Response;
  transactionsResponse: LoadTransactions.Response;
};
