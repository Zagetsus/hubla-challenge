import { render, screen } from '@testing-library/react';
import { DefaultLayoutTag } from '~/app/presentation/layouts';

const makeSut = (): void => {
  render(
    <DefaultLayoutTag>
      <div />
    </DefaultLayoutTag>
  );
};

describe('Default Layout Component', () => {
  it('should default layout', () => {
    makeSut();

    const body = screen.getByTestId('default-page-body');
    expect(body.children).toHaveLength(2);
  });
});
