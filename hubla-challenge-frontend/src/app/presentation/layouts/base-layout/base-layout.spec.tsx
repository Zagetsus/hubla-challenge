import { render, screen } from '@testing-library/react';
import { BaseLayoutTag } from '~/app/presentation/layouts';

const makeSut = (): void => {
  render(
    <BaseLayoutTag>
      <div />
    </BaseLayoutTag>
  );
};

describe('Base Layout Component', () => {
  it('should base layout', () => {
    makeSut();

    const body = screen.getByTestId('base-page-body');
    expect(body.children).toHaveLength(2);
  });
});
