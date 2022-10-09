import { GetServerSidePropsContext } from 'next';
import { HttpClient } from '~/app/application/protocols/http';
import { AuthorizeHttpClientDecorator } from '~/app/main/decorators/client-authorized';
import { makeCookieAdapter } from '~/app/main/factories/cache';
import { makeAxiosHttpClient } from '~/app/main/factories/http';

export const makeAuthorizedHttpClientDecorator = (
  context?: GetServerSidePropsContext
): HttpClient => {
  return new AuthorizeHttpClientDecorator(
    makeCookieAdapter(context),
    makeAxiosHttpClient()
  );
};
