import { LoadBalance } from '~/app/domain/usecases/extract';

export type ExtractContextStateProps = {
  balanceResponse: LoadBalance.Response;
};
