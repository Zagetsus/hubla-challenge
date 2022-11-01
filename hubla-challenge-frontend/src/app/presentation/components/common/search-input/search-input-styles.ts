import { InputBase } from '~/app/presentation/components/mui';
import { styled } from '~/app/presentation/components/mui/styles';

export const SearchInput = styled(InputBase)(({ theme }) => ({
  border: '1px solid #ced4da',
  borderRadius: 8,
  width: '100%',
  padding: '0rem 1rem',
  '& .MuiInputBase-input': {
    position: 'relative',
    fontSize: 16,
    padding: '0rem',
    height: '2.5rem',
    '&:focus': {
      borderColor: theme.palette.primary.main
    }
  }
}));
