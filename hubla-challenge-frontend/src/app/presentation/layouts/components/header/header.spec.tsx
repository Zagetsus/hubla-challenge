import { render } from '@testing-library/react';
import { HeaderTag } from '~/app/presentation/layouts/components';

const makeSut = (): void => {
  render(<HeaderTag />);
};

describe('Header Component', () => {
  it('should Header', () => {
    makeSut();
  });
});
