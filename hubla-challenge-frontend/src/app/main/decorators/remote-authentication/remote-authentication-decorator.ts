import { SetStorage } from '~/app/application/protocols/cache';
import { Authentication } from '~/app/domain/usecases';
import { TOKEN_NAME } from '~/config/vars';

export class RemoteAuthenticationDecorator implements Authentication {
  constructor(
    private readonly setStorage: SetStorage,
    private readonly remoteAuthentication: Authentication
  ) {}

  async signIn(
    params: Authentication.Params
  ): Promise<Authentication.Response> {
    const httpResponse = await this.remoteAuthentication.signIn(params);
    this.setStorage.set(TOKEN_NAME, httpResponse);
    return httpResponse;
  }
}
