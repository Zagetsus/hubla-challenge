import { render } from '@testing-library/react';
import { ButtonTag } from '~/app/presentation/components';
import { ButtonProps } from '~/app/presentation/components/interfaces';

const makeSut = (props: ButtonProps = {}) => {
  return render(<ButtonTag {...props} />);
};

describe('Button Component', () => {
  it('should have button', () => {
    const { getByTestId } = makeSut();
    const button = getByTestId('button');
    expect(button).toBeInTheDocument();
  });

  it('should have button with label', () => {
    const { getByTestId } = makeSut({ label: 'Test Button' });
    const button = getByTestId('button');
    expect(button).toHaveTextContent('Test Button');
  });

  it('should have button with children', () => {
    const { getByTestId } = makeSut({ children: <span>Test Button</span> });
    const button = getByTestId('button');
    expect(button).toHaveTextContent('Test Button');
  });

  it('should have button with disabled', () => {
    const { getByTestId } = makeSut({ disabled: true });
    const button = getByTestId('button');
    expect(button).toBeDisabled();
  });

  it('should have button with variantSize', () => {
    const { getByTestId } = makeSut({ variantSize: 'small' });
    const button = getByTestId('button');
    expect(button).toHaveStyle({ width: '7.5rem' });
  });
});
