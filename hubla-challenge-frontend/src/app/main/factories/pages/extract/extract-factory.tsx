import { ExtractProps } from '~/app/domain/protocols/extract/extract.type';
import { ExtractTag } from '~/app/presentation/pages';

export const makeExtract = (props: ExtractProps) => {
  return <ExtractTag {...props} />;
};
