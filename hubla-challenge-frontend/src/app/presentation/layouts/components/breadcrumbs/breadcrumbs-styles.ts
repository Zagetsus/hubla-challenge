import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    margin: '1rem 0 3.406rem'
  },
  previousPage: {
    fontSize: 14,
    textDecoration: 'none',
    color: theme.palette.text.secondary
  },
  currentPage: {
    fontSize: 14,
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightBold
  }
});
