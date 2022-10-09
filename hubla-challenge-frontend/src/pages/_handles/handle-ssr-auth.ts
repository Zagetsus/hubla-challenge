import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next';
import { AccessDeniedError } from '~/app/domain/errors';
import { makeCookieAdapter } from '~/app/main/factories/cache';
import { TOKEN_NAME } from '~/config/vars';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function handleSSRAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookie = makeCookieAdapter(context).get(TOKEN_NAME);
    const toLogin = {
      redirect: {
        destination: '/',
        permanent: false
      }
    };

    if (!cookie) {
      return toLogin;
    }

    try {
      return await fn(context);
    } catch (error) {
      const isAccessDeniedError = error instanceof AccessDeniedError;
      if (isAccessDeniedError) {
        makeCookieAdapter(context).set(TOKEN_NAME);
        return toLogin;
      }

      throw error;
    }
  };
}
