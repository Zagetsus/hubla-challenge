import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '2.125rem',
    marginTop: '3.0625rem'
  },
  searchBox: {
    width: '17.188rem'
  },
  button: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.main,
      textDecoration: 'none'
    }
  }
});
