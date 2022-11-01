import { InputAdornment } from '~/app/presentation/components';
import { SearchInput } from '~/app/presentation/components/common/search-input/search-input-styles';
import { SearchIcon } from '~/app/presentation/components/icons';
import { SearchInputProps } from '~/app/presentation/components/interfaces';

function SearchInputComponent({ ...props }: SearchInputProps) {
  return (
    <SearchInput
      data-testid='search-input'
      {...props}
      endAdornment={
        <InputAdornment position={'end'}>
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}

export default SearchInputComponent;
