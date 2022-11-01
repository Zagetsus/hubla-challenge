import { Box, Pagination } from '~/app/presentation/components';
import makeStyles from './extract-pagination-styles';

function ExtractPaginationComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Pagination count={14} color='primary' />
    </Box>
  );
}

export default ExtractPaginationComponent;
