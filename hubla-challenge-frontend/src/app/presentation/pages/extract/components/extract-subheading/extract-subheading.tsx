import { Box, Typography } from '~/app/presentation/components';
import makeStyles from './extract-subheading-styles';

function ExtractSubheadingComponent() {
  const classes = makeStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} component={'h1'}>
        Extrato
      </Typography>
      <Typography className={classes.text}>
        Verifique as movimentações/lançamentos diários da sua conta.
      </Typography>
    </Box>
  );
}

export default ExtractSubheadingComponent;
