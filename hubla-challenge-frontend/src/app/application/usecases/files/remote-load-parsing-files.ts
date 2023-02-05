import {
  HttpClient,
  HttpStatusCodeEnum
} from '~/app/application/protocols/http';
import { AccessDeniedError, UnexpectedError } from '~/app/domain/errors';
import { LoadParsingFiles } from '~/app/domain/usecases';
import { camelizeKeys } from '~/app/infra/utils';

export class RemoteLoadParsingFiles implements LoadParsingFiles {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<
      RemoteLoadParsingFiles.ApiResponse[]
    >
  ) {}

  async load(
    body: RemoteLoadParsingFiles.params
  ): Promise<RemoteLoadParsingFiles.Response[]> {
    const httpResponse = await this.httpClient.request({
      method: 'post',
      url: this.url,
      body: body
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCodeEnum.ok:
        return parse(httpResponse.body as RemoteLoadParsingFiles.ApiResponse[]);
      case HttpStatusCodeEnum.created:
        return parse(httpResponse.body as RemoteLoadParsingFiles.ApiResponse[]);
      case HttpStatusCodeEnum.noContent:
        return [] as RemoteLoadParsingFiles.Response[];
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
  transactions: RemoteLoadParsingFiles.ApiResponse[]
): RemoteLoadParsingFiles.Response[] {
  return transactions.map(transaction =>
    camelizeKeys<RemoteLoadParsingFiles.Response>(transaction)
  );
}

export namespace RemoteLoadParsingFiles {
  export type params = LoadParsingFiles.params;
  export type ApiResponse = LoadParsingFiles.ApiResponse;
  export type Response = LoadParsingFiles.Response;
}
