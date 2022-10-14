import { fireEvent, render, screen } from '@testing-library/react';
import { useRouter } from 'next/router';
import { UnauthenticatedHeaderTag } from '~/app/presentation/layouts/components';

const makeSut = (): void => {
  render(<UnauthenticatedHeaderTag />);
};

jest.mock('next/router', () => ({
  useRouter: jest.fn()
}));

describe('Unauthenticated header Component', () => {
  it('should unauthenticated header', () => {
    makeSut();

    const button = screen.getByTestId('default-menu-button');
    expect(button).not.toBeUndefined();
  });

  it('should redirect', () => {
    const push = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => ({
      push
    }));

    makeSut();
    const button = screen.getByTestId('default-menu-button');

    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith('/');
  });
});
