import { Box, ButtonTag, Typography } from '~/app/presentation/components';
import { EntryIcon, ExportIcon } from '~/app/presentation/components/icons';
import { OutputIcon } from '~/app/presentation/components/icons/output';
import { LightTheme as theme } from '~/styles/theme';
import makeStyles from './extract-legend-styles';

function ExtractLegendComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.legendsBox}>
        <Box className={classes.legendCard}>
          <EntryIcon fill={theme.palette.success.main} size={12} />
          <Typography>Entrada</Typography>
        </Box>
        <Box className={classes.legendCard}>
          <OutputIcon fill={theme.palette.error.main} size={12} />
          <Typography>Saída</Typography>
        </Box>
      </Box>
      <ButtonTag startIcon={<ExportIcon />} className={classes.button}>
        Exportar relatório
      </ButtonTag>
    </Box>
  );
}

export default ExtractLegendComponent;
