import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { LoadParsingFiles } from '~/app/domain/usecases';
import { makeRemoteLoadParsingFile } from '~/app/main/factories/usecases';
import {
  Alert,
  Box,
  ButtonTag,
  IconButton,
  Modal,
  Snackbar,
  Typography
} from '~/app/presentation/components';
import { ClosedIcon, UploadIcon } from '~/app/presentation/components/icons';
import { TableTag } from '~/app/presentation/pages/extract/components/extract-modals/upload-transaction-modal/components';
import { UploadTransactionModalProps } from '~/app/presentation/pages/extract/components/extract-modals/upload-transaction-modal/upload-transaction-modal-props.interface';
import makeStyles from './upload-transaction-modal-styles';

function UploadTransactionModalComponent({
  open,
  handleClose
}: UploadTransactionModalProps) {
  const [snackbar, setSnackbar] = useState(false);
  const [transactions, setTransactions] = useState<LoadParsingFiles.Response[]>(
    [] as LoadParsingFiles.Response[]
  );
  const classes = makeStyles();

  const {
    getRootProps,
    getInputProps,
    acceptedFiles: [acceptedFile],
    fileRejections
  } = useDropzone({
    accept: { 'text/plain': ['.txt'] }
  });

  const hasAcceptedFiles = !!acceptedFile;
  const hasFileRejections = !!fileRejections.length;
  const hasTransactions = !!transactions.length;

  const subtitle = hasTransactions
    ? 'Verifique se os dados importados estão corretos.'
    : 'Selecione o arquivo em formato TXT. para importar as transações';
  const selectionFileText = hasAcceptedFiles
    ? acceptedFile.name
    : 'Selecionar no dispositivo';
  const buttonText = hasTransactions ? 'Salvar' : 'Importar';

  function uploadFile() {
    const formData = new FormData();

    formData.append('file', acceptedFile);

    const loadParsingFile = makeRemoteLoadParsingFile();

    loadParsingFile
      .load(formData)
      .then(response => setTransactions(response))
      .catch(() => setSnackbar(true));
  }

  function snackbarClose(
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar(false);
  }

  return (
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <>
        <Box className={classes.container}>
          <IconButton className={classes.closeButton} onClick={handleClose}>
            <ClosedIcon />
          </IconButton>

          <Box className={classes.header}>
            <Typography className={classes.title}>
              Importar transações
            </Typography>
            <Typography>{subtitle}</Typography>
          </Box>

          {hasTransactions ? (
            <TableTag transactions={transactions} />
          ) : (
            <Box {...getRootProps({ className: classes.dragAndDrop })}>
              <input {...getInputProps()} />

              <UploadIcon />
              <Typography className={classes.fileText}>
                Arraste o arquivo aqui
              </Typography>
              <Typography className={classes.fileText}>ou</Typography>

              <ButtonTag className={classes.fileButton} variantStyle='outlined'>
                {selectionFileText}
              </ButtonTag>
            </Box>
          )}

          {hasFileRejections && (
            <Typography className={classes.errorFile}>
              O formato do arquivo precisa ser .TXT
            </Typography>
          )}

          <Box className={classes.buttonBox}>
            <ButtonTag
              onClick={handleClose}
              className='text'
              variantStyle='text'
            >
              Cancelar
            </ButtonTag>
            <ButtonTag
              variantStyle='contained'
              disabled={!hasAcceptedFiles}
              onClick={uploadFile}
            >
              {buttonText}
            </ButtonTag>
          </Box>
        </Box>

        <Snackbar
          open={snackbar}
          autoHideDuration={6000}
          onClose={snackbarClose}
        >
          <Alert
            elevation={6}
            variant='filled'
            onClose={snackbarClose}
            severity='error'
            sx={{ width: '100%' }}
          >
            Não foi possível fazer upload dos arquivos!
          </Alert>
        </Snackbar>
      </>
    </Modal>
  );
}

export default UploadTransactionModalComponent;
