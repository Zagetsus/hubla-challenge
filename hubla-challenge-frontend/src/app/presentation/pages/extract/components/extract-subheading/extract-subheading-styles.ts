import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    marginTop: '3rem'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: 500,
    lineHeight: '1.25rem',
    letterSpacing: '-0.01562em',
    color: theme.palette.secondary.main
  },
  text: {
    marginTop: '1rem',
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: '1.4rem',
    letterSpacing: '0.00714em',
    color: theme.palette.secondary.main
  }
});
