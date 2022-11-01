import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    padding: '0 1rem'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: '1.25rem',
    letterSpacing: '-0.01562em',
    color: theme.palette.secondary.main
  },
  text: {
    marginTop: '0.25rem',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: '1.25rem',
    letterSpacing: '0.00938em',
    color: theme.palette.secondary.main
  }
});
