import { useDropzone } from 'react-dropzone';
import {
  Box,
  ButtonTag,
  IconButton,
  Modal,
  Typography
} from '~/app/presentation/components';
import { ClosedIcon, UploadIcon } from '~/app/presentation/components/icons';
import { UploadTransactionModalProps } from '~/app/presentation/pages/extract/components/extract-modals/upload-transaction-modal/upload-transaction-modal-props.interface';
import makeStyles from './upload-transaction-modal-styles';

function UploadTransactionModalComponent({
  open,
  handleClose
}: UploadTransactionModalProps) {
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

  return (
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <Box className={classes.container}>
        <IconButton className={classes.closeButton} onClick={handleClose}>
          <ClosedIcon />
        </IconButton>

        <Box className={classes.header}>
          <Typography className={classes.title}>Importar transações</Typography>
          <Typography>
            Selecione o arquivo em formato TXT. para importar as transações
          </Typography>
        </Box>

        <Box {...getRootProps({ className: classes.dragAndDrop })}>
          <input {...getInputProps()} />

          <UploadIcon />
          <Typography className={classes.fileText}>
            Arraste o arquivo aqui
          </Typography>
          <Typography className={classes.fileText}>ou</Typography>

          <ButtonTag className={classes.fileButton} variantStyle='outlined'>
            {hasAcceptedFiles ? acceptedFile.name : 'Selecionar no dispositivo'}
          </ButtonTag>
        </Box>

        {hasFileRejections && (
          <Typography className={classes.errorFile}>
            O formato do arquivo precisa ser .TXT
          </Typography>
        )}

        <Box className={classes.buttonBox}>
          <ButtonTag onClick={handleClose} className='text' variantStyle='text'>
            Cancelar
          </ButtonTag>
          <ButtonTag variantStyle='contained'>Importar</ButtonTag>
        </Box>
      </Box>
    </Modal>
  );
}

export default UploadTransactionModalComponent;
