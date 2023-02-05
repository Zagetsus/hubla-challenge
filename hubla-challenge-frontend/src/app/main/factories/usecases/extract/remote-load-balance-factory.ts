import { GetServerSidePropsContext } from 'next';
import { RemoteLoadBalance } from '~/app/application/usecases';
import { makeAuthorizedHttpClientDecorator } from '~/app/main/factories/decorators';

export const makeRemoteLoadBalance = (context?: GetServerSidePropsContext) => {
  return new RemoteLoadBalance(
    '/v1/extracts/balance',
    makeAuthorizedHttpClientDecorator(context)
  );
};
