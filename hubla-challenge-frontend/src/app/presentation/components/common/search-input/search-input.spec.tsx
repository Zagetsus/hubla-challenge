import { render } from '@testing-library/react';
import { SearchInputTag } from '~/app/presentation/components';
import { SearchInputProps } from '~/app/presentation/components/interfaces';

const makeSut = (props: SearchInputProps) => {
  return render(<SearchInputTag {...props} />);
};

describe('Search input', () => {
  it('should have input', () => {
    const { getByTestId } = makeSut({ title: 'teste' });
    const SearchInput = getByTestId('search-input');
    expect(SearchInput).toBeInTheDocument();
  });
});
