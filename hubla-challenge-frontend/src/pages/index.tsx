import { makeLogin } from '~/app/main/factories/pages';
import { DefaultLayoutTag } from '~/app/presentation/layouts';

function Login() {
  return <DefaultLayoutTag>{makeLogin()}</DefaultLayoutTag>;
}

export default Login;
