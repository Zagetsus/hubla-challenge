import { GetServerSideProps } from 'next';
import { ExtractProps } from '~/app/domain/protocols/extract/extract.type';
import { makeExtract } from '~/app/main/factories/pages';
import {
  makeRemoteLoadBalance,
  makeRemoteLoadTransactions
} from '~/app/main/factories/usecases';
import { BaseLayoutTag } from '~/app/presentation/layouts';
import handleSSRAuth from '~/pages/_handles/handle-ssr-auth';

export const getServerSideProps: GetServerSideProps = handleSSRAuth(
  async context => {
    const { p } = context.query;

    console.log(p);

    const page = Number(p) || 1;
    const limit = 4;

    const remoteLoadBalance = makeRemoteLoadBalance(context);
    const balanceHttpResponse = await remoteLoadBalance.load();
    const remoteLoadTransactions = makeRemoteLoadTransactions(context);
    const transactionsHttpResponse = await remoteLoadTransactions.load({
      page,
      limit
    });

    return {
      props: {
        balanceResponse: balanceHttpResponse,
        transactionsResponse: transactionsHttpResponse
      }
    };
  }
);

function Extract(props: ExtractProps) {
  return (
    <BaseLayoutTag pageTitle={'Extrato'}>{makeExtract(props)}</BaseLayoutTag>
  );
}

export default Extract;
