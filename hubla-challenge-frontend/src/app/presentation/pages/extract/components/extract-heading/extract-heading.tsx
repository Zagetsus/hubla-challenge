import { useState } from 'react';
import {
  Box,
  ButtonTag,
  IconButton,
  Typography
} from '~/app/presentation/components';
import { AddIcon } from '~/app/presentation/components/icons';
import { UploadTransactionModalTag } from '~/app/presentation/pages/extract/components/extract-modals';
import { LightTheme as theme } from '~/styles/theme';
import makeStyles from './extract-heading-styles';

function ExtractHeadingComponent() {
  const [modal, setModal] = useState(false);
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} component='h1'>
        Financeiro
      </Typography>
      <ButtonTag
        onClick={() => setModal(true)}
        startIcon={<AddIcon />}
        className={classes.button}
        variantStyle='outlined'
      >
        Adicionar novas transações
      </ButtonTag>
      <IconButton onClick={() => setModal(true)} className={classes.iconButton}>
        <AddIcon fill={theme.palette.primary.main} />
      </IconButton>

      <UploadTransactionModalTag
        open={modal}
        handleClose={() => setModal(false)}
      />
    </Box>
  );
}

export default ExtractHeadingComponent;
