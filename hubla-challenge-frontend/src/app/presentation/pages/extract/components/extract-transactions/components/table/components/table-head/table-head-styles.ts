import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    boxShadow:
      '0rem 0.25rem 0.1875rem rgba(143, 143, 143, 0.25), 0px 0.0625rem 0px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px 8px 0px 0px',
    padding: '0.5rem 1.4rem',
    margin: '0 0.0313rem',
    height: '3.25rem',
    '& .cols': {
      textAlign: 'center',
      ...theme.typography.body2,
      lineHeight: '1.125rem',
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '0.75rem',
      '&.code': {
        width: '11.313rem'
      },
      '&.product': {
        width: '15.313rem'
      },
      '&.date': {
        width: '6.438rem'
      },
      '&.seller': {
        width: '10rem'
      },
      '&.type': {
        width: '8.75rem'
      },
      '&.value': {
        width: '6.25rem'
      },
      '&.action': {
        width: '5.938rem'
      }
    }
  }
});
