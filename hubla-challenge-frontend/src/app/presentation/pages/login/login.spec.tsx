import { render, screen } from '@testing-library/react';
import { LoginComponentProps } from '~/app/domain/protocols/login/login-props.type';
import { LoginTag } from '~/app/presentation/pages';

const makeSut = (): void => {
  const props: LoginComponentProps = {
    validation: {},
    authentication: {} as never
  };

  render(<LoginTag {...props} />);
};

describe('Login Page', () => {
  it('should login page', () => {
    makeSut();
  });
});
