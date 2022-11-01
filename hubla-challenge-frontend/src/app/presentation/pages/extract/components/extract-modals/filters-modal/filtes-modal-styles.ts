import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  container: {
    position: 'relative',
    padding: '2.5rem 1.5rem',
    backgroundColor: theme.palette.background.default,
    outline: 0,
    width: '25rem',
    height: '100%',
    overflowY: 'auto'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '1.5rem'
  },
  headerTitleBox: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    '& p': {
      fontWeight: 700,
      fontSize: '1.25rem',
      lineHeight: '100%',

      color: 'rgba(51, 51, 51, 0.9)'
    }
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.25rem',
    marginBottom: '1.5rem'
  },
  filterTitle: {
    height: '2.063rem',
    marginBottom: '.5rem',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '100%',

    color: 'rgba(51, 51, 51, 0.9)'
  },
  radioBox: {
    paddingLeft: '1.75rem',
    paddingBottom: '.5rem',
    borderBottom: '1px solid #C8C8C8'
  },
  button: {
    width: '100%'
  }
});
