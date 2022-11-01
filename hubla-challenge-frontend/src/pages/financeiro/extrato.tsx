import { makeExtract } from '~/app/main/factories/pages';
import { BaseLayoutTag } from '~/app/presentation/layouts';

function Extract() {
  return <BaseLayoutTag pageTitle={'Extrato'}>{makeExtract()}</BaseLayoutTag>;
}

export default Extract;
