import { useRouter } from 'next/router';
import { ChangeEvent } from 'react';
import { Box, Pagination } from '~/app/presentation/components';
import { useExtractContext } from '~/app/presentation/hooks';
import makeStyles from './extract-pagination-styles';

function ExtractPaginationComponent() {
  const classes = makeStyles();
  const {
    transactionsResponse: { meta }
  } = useExtractContext();

  const router = useRouter();

  const handleChange = async (event: ChangeEvent<unknown>, page: number) => {
    await router.push({
      query: {
        p: page
      }
    });
  };

  return (
    <Box className={classes.container}>
      <Pagination
        count={meta.totalPages}
        page={meta.currentPage}
        onChange={handleChange}
        color='primary'
      />
    </Box>
  );
}

export default ExtractPaginationComponent;
