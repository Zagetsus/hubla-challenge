import { useLoginContext } from '~/app/presentation/hooks';
import {
  LoginButtonTag,
  LoginHeadingTag,
  LoginInputsTags
} from '~/app/presentation/pages/login/components';
import makeStyles from './login-form-styles';

function LoginFormComponent() {
  const { handleSubmit, onSubmit } = useLoginContext();

  const classes = makeStyles();

  return (
    <form className={classes.container} onSubmit={handleSubmit(onSubmit)}>
      <LoginHeadingTag />
      <LoginInputsTags />
      <LoginButtonTag />
    </form>
  );
}

export default LoginFormComponent;
