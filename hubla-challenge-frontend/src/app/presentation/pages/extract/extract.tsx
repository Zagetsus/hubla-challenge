import { ExtractProps } from '~/app/domain/protocols';
import { Box } from '~/app/presentation/components';
import {
  ExtractFiltersTag,
  ExtractHeadingTag,
  ExtractLegendTag,
  ExtractOverviewTag,
  ExtractPaginationTag,
  ExtractSubheadingTag,
  ExtractTransactionsTag
} from '~/app/presentation/pages/extract/components';
import { ExtractProvider } from '~/app/presentation/providers';
import makeStyles from './extract-styles';

function ExtractComponent(props: ExtractProps) {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <ExtractProvider {...props}>
        <ExtractHeadingTag />
        <ExtractOverviewTag />
        <ExtractSubheadingTag />
        <ExtractFiltersTag />
        <ExtractLegendTag />
        <ExtractTransactionsTag />
        <ExtractPaginationTag />
      </ExtractProvider>
    </Box>
  );
}

export default ExtractComponent;
