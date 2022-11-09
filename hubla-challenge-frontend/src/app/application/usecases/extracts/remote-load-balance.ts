import {
  HttpClient,
  HttpStatusCodeEnum
} from '~/app/application/protocols/http';
import { AccessDeniedError, UnexpectedError } from '~/app/domain/errors';
import { LoadBalance } from '~/app/domain/usecases/extract';

export class RemoteLoadBalance implements LoadBalance {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadBalance.Response>
  ) {}

  async load(): Promise<RemoteLoadBalance.Response> {
    const httpResponse = await this.httpClient.request({
      method: 'get',
      url: this.url
    });
    switch (httpResponse.statusCode) {
      case HttpStatusCodeEnum.ok:
        return httpResponse.body as RemoteLoadBalance.Response;
      case HttpStatusCodeEnum.noContent:
        return {} as RemoteLoadBalance.Response;
      case HttpStatusCodeEnum.unauthorized:
      case HttpStatusCodeEnum.badRequest:
      case HttpStatusCodeEnum.forbidden:
        throw new AccessDeniedError();
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteLoadBalance {
  export type Response = LoadBalance.Response;
}
