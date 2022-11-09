import { GetServerSidePropsContext } from 'next';
import { RemoteLoadTransactions } from '~/app/application/usecases/extracts';
import { makeAuthorizedHttpClientDecorator } from '~/app/main/factories/decorators';

export const makeRemoteLoadTransactions = (
  context?: GetServerSidePropsContext
) => {
  return new RemoteLoadTransactions(
    '/v1/extracts/transactions-by-date',
    makeAuthorizedHttpClientDecorator(context)
  );
};
