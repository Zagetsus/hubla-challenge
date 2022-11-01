import { Alert, Snackbar } from '~/app/presentation/components';
import { useLoginContext } from '~/app/presentation/hooks';

function LoginToastComponent() {
  const { snackbar, snackbarClose } = useLoginContext();

  return (
    <Snackbar open={snackbar} autoHideDuration={6000} onClose={snackbarClose}>
      <Alert
        elevation={6}
        variant='filled'
        onClose={snackbarClose}
        severity='error'
        sx={{ width: '100%' }}
      >
        Email e/ou senha incorretos!
      </Alert>
    </Snackbar>
  );
}

export default LoginToastComponent;
