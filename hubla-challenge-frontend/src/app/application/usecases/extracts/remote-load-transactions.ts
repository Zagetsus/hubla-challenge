import {
  HttpClient,
  HttpStatusCodeEnum
} from '~/app/application/protocols/http';
import { AccessDeniedError, UnexpectedError } from '~/app/domain/errors';
import { LoadTransactions } from '~/app/domain/usecases/extract';
import { camelizeKeys } from '~/app/infra/utils';

export class RemoteLoadTransactions implements LoadTransactions {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadTransactions.ApiResponse>
  ) {}

  async load(
    params: RemoteLoadTransactions.Params
  ): Promise<RemoteLoadTransactions.Response> {
    const { page, limit } = params;

    const queryString = new URLSearchParams({
      page: String(page),
      limit: String(limit)
    });

    const url = `${this.url}?${queryString}`;

    const httpResponse = await this.httpClient.request({
      method: 'get',
      url
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCodeEnum.ok:
        return parse(httpResponse.body as RemoteLoadTransactions.ApiResponse);
      case HttpStatusCodeEnum.noContent:
        return {} as RemoteLoadTransactions.Response;
      case HttpStatusCodeEnum.unauthorized:
      case HttpStatusCodeEnum.badRequest:
      case HttpStatusCodeEnum.forbidden:
        throw new AccessDeniedError();
      default:
        throw new UnexpectedError();
    }
  }
}

function parse(
  params: RemoteLoadTransactions.ApiResponse
): RemoteLoadTransactions.Response {
  const { transactions_by_date, meta } = params;

  const camelizeTransactionsByDate = transactions_by_date.map(
    transactionByDate =>
      camelizeKeys<RemoteLoadTransactions.TransactionsByDate>(transactionByDate)
  );

  const camelizeMeta = camelizeKeys<RemoteLoadTransactions.Meta>(meta);

  return {
    transactionsByDate: camelizeTransactionsByDate,
    meta: camelizeMeta
  };
}

export namespace RemoteLoadTransactions {
  export type Params = LoadTransactions.Params;
  export type ApiResponse = LoadTransactions.ApiResponse;
  export type TransactionsByDate = LoadTransactions.TransactionsByDate;
  export type Meta = LoadTransactions.Meta;
  export type Response = LoadTransactions.Response;
}
