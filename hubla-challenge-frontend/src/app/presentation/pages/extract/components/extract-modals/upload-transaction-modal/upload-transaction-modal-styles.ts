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
  header: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '1.5rem',
    '& p': {
      color: theme.palette.secondary.main,
      textAlign: 'center',
      fontSize: '1.25rem'
    }
  },
  title: {
    fontWeight: 700,
    lineHeight: '1.25rem',
    letterSpacing: '-0.01562em',
    marginBottom: '0.625rem'
  },
  dragAndDrop: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '14rem',
    borderRadius: '1rem',
    border: `2px dashed ${theme.palette.primary.main}`
  },
  fileText: {
    marginTop: '.5rem',
    fontWeight: 700,
    fontSize: '1rem',
    lineHeight: '140%',

    textAlign: 'center',
    letterSpacing: '0.2px',

    color: theme.palette.secondary.main
  },
  fileButton: {
    marginTop: '.5rem',
    width: '13rem',
    borderWidth: '0.125rem',
    borderColor: theme.palette.primary.main,
    '&:hover': {
      borderWidth: '0.125rem',
      borderColor: theme.palette.primary.main
    }
  },
  errorFile: {
    marginTop: '0.875rem',
    fontWeight: 500,
    fontSize: '0.875rem',
    lineHeight: '140%',
    textAlign: 'center',
    letterSpacing: '0.2px',
    color: '#D80027'
  },
  buttonBox: {
    marginTop: '3rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1.5rem',
    '& button': {
      width: '12.5rem',
      height: '2.5rem'
    },
    '& .text': {
      color: theme.palette.secondary.main,
      textDecoration: 'none',
      '&:hover': {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
      }
    }
  }
});
