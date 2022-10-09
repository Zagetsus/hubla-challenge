import { GetServerSidePropsContext } from 'next';
import { GetStorage, SetStorage } from '~/app/application/protocols';
import { CookieAdapter } from '~/app/infra/cache';

export const makeCookieAdapter = (
  context?: GetServerSidePropsContext
): SetStorage & GetStorage => {
  return new CookieAdapter(context);
};
