import { useState } from 'react';
import { Box, ButtonTag, SearchInputTag } from '~/app/presentation/components';
import { FilterIcon } from '~/app/presentation/components/icons';
import { FiltersModalTag } from '~/app/presentation/pages/extract/components/extract-modals';
import makeStyles from './extract-filters-styles';

function ExtractFiltersComponent() {
  const [modal, setModal] = useState(false);
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.searchBox}>
        <SearchInputTag placeholder='Buscar por pedido...' />
      </Box>
      <ButtonTag
        onClick={() => setModal(true)}
        className={classes.button}
        startIcon={<FilterIcon />}
      >
        Filtros
      </ButtonTag>

      <FiltersModalTag open={modal} handleClose={() => setModal(false)} />
    </Box>
  );
}

export default ExtractFiltersComponent;
