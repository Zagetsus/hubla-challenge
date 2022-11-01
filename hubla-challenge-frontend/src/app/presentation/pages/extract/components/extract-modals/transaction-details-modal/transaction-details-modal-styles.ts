import { makeStyles } from '~/app/presentation/components/mui/styles';
import { LightTheme as theme } from '~/styles/theme';

export default makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    position: 'relative',
    borderRadius: '1rem',
    padding: '2.5rem 3.063rem',
    backgroundColor: theme.palette.background.default,
    outline: 0,
    width: '53rem',
    overflowY: 'auto'
  },
  closeButton: {
    position: 'absolute',
    top: '1.125rem',
    right: '1.5rem'
  },
  title: {
    color: theme.palette.secondary.main,
    fontSize: '1.25rem',
    textAlign: 'center',
    fontWeight: 700,
    lineHeight: '1.25rem',
    marginBottom: '2.688rem',
    letterSpacing: '-0.01562em'
  },
  detailsRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '2.25rem'
  },
  detailsCard: {
    width: '9.375rem',
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  typeTransaction: {
    fontSize: '1.125rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.016rem',

    color: '#00072B'
  },
  value: {
    width: '9.375rem',
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '1.25rem',

    textAlign: 'right',
    letterSpacing: '0.016rem',

    color: '#2F8C0E'
  },
  body: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '3.5rem'
  },
  bodyRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  },
  sectionTitle: {
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    color: '#00072B',
    '&.width-default': {
      width: '3.688rem'
    },
    '&.heavy': {
      fontSize: '1rem'
    }
  },
  sectionText: {
    fontSize: '1rem',
    lineHeight: '1.25rem',
    letterSpacing: '0.016rem',
    color: '#00072B'
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'center'
  },
  button: {
    margin: '0 auto',
    width: '12.5rem'
  }
});
