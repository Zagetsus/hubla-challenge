import { makeLogin } from '~/app/main/factories/pages';
import { DefaultLayoutTag } from '~/app/presentation/layouts';
import handleSSRGuest from '~/pages/_handles/handle-ssr-guest';

export const getServerSideProps = handleSSRGuest(async () => {
  return {
    props: {}
  };
});

function Login() {
  return <DefaultLayoutTag>{makeLogin()}</DefaultLayoutTag>;
}

export default Login;
