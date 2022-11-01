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
import makeStyles from './extract-styles';

function ExtractComponent() {
  const classes = makeStyles();
  return (
    <Box className={classes.container}>
      <ExtractHeadingTag />
      <ExtractOverviewTag />
      <ExtractSubheadingTag />
      <ExtractFiltersTag />
      <ExtractLegendTag />
      <ExtractTransactionsTag />
      <ExtractPaginationTag />
    </Box>
  );
}

export default ExtractComponent;
