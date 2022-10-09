import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next';
import { makeCookieAdapter } from '~/app/main/factories/cache';
import { TOKEN_NAME } from '~/config/vars';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function handleSSRGuest<P>(fn: GetServerSideProps<P>) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookie = makeCookieAdapter(context).get(TOKEN_NAME);

    if (cookie) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false
        }
      };
    }

    return await fn(context);
  };
}
