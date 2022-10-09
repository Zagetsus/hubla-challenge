import {
  HttpClient,
  HttpStatusCodeEnum as HttpStatusCode
} from '~/app/application/protocols/http';
import { UnexpectedError } from '~/app/domain/errors';
import { Authentication } from '~/app/domain/usecases';

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpClient<RemoteAuthentication.Response>
  ) {}

  async signIn(
    params: RemoteAuthentication.Params
  ): Promise<RemoteAuthentication.Response> {
    const httpResponse = await this.httpPostClient.request({
      method: 'post',
      url: this.url,
      body: params
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
      case HttpStatusCode.created:
        return httpResponse.body as RemoteAuthentication.Response;
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteAuthentication {
  export type Params = Authentication.Params;
  export type Response = Authentication.Response;
}
