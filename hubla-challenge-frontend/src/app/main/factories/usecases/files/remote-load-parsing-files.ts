import { GetServerSidePropsContext } from 'next';
import { RemoteLoadParsingFiles } from '~/app/application/usecases';
import { makeAuthorizedHttpClientDecorator } from '~/app/main/factories/decorators';

export const makeRemoteLoadParsingFile = (
  context?: GetServerSidePropsContext
) => {
  return new RemoteLoadParsingFiles(
    '/v1/files',
    makeAuthorizedHttpClientDecorator(context)
  );
};
