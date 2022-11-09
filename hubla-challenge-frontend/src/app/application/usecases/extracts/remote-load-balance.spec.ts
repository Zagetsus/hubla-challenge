import * as faker from 'faker';
import { HttpStatusCodeEnum } from '~/app/application/protocols/http';
import { HttpClientSpy } from '~/app/application/test';
import { AccessDeniedError, UnexpectedError } from '~/app/domain/errors';
import { RemoteLoadBalance } from './remote-load-balance';

type SutTypes = {
  httpClientSpy: HttpClientSpy;
  sut: RemoteLoadBalance;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy();
  const sut = new RemoteLoadBalance(url, httpClientSpy);
  return {
    sut,
    httpClientSpy
  };
};

describe('RemoteLoadBalance', () => {
  test('should call HttpClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    await sut.load();
    expect(httpClientSpy.url).toBe(url);
  });

  test('should throw AccessDeniedError if HttpClient returns 400', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCodeEnum.badRequest
    };
    const promise = sut.load();
    await expect(promise).rejects.toThrow(new AccessDeniedError());
  });

  test('should throw AccessDeniedError if HttpClient returns 401', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCodeEnum.unauthorized
    };
    const promise = sut.load();
    await expect(promise).rejects.toThrow(AccessDeniedError);
  });

  test('should throw AccessDeniedError if HttpClient returns 403', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCodeEnum.forbidden
    };
    const promise = sut.load();
    await expect(promise).rejects.toThrow(AccessDeniedError);
  });

  test('should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCodeEnum.notFound
    };
    const promise = sut.load();
    await expect(promise).rejects.toThrow(UnexpectedError);
  });

  test('should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCodeEnum.serverError
    };
    const promise = sut.load();
    await expect(promise).rejects.toThrow(UnexpectedError);
  });

  test('should return a empty object if HttpClient returns 204', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCodeEnum.noContent
    };
    const httpResponse = await sut.load();
    expect(httpResponse).toEqual({});
  });
});
