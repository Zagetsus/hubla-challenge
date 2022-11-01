import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  menuProfileBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.563rem',
    gap: '0.75rem',
    padding: '0 1rem',

    [theme.breakpoints.down('md')]: {
      padding: 0
    }
  },
  menuProfileName: {
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.188rem',
    letterSpacing: '0.0015em',
    color: theme.palette.text.primary
  },
  menuProfileOccupation: {
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '1.063rem',
    letterSpacing: '0.0015em',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    color: theme.palette.primary.main
  },
  menu: {
    padding: '0.5rem'
  },
  menuText: {
    fontSize: '0.875rem',
    lineHeight: '1.313rem',

    letterSpacing: '0.0015em',

    color: theme.palette.text.primary
  }
});
