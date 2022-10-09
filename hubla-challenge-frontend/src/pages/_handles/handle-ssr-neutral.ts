import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default function handleSSRNeutral<P>(fn: GetServerSideProps<P>) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    // something here..

    return await fn(context);
  };
}
