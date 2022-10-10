import {Head} from "next/document";
import {Box, Toolbar} from "~/app/presentation/components";
import {DefaultLayoutProps} from "~/app/presentation/layouts/default-layout/default-layout-props.interface";
import makeStyles from './default-layout-styles';

function DefaultLayoutComponent({ children }: DefaultLayoutProps) {
  const classes = makeStyles();
  
  return (
    <Box>
      <Head>
        <title>Hubla</title>
      </Head>

      <Box component='main' >
        <Toolbar className={classes.toolbar}  />
        {children}
      </Box>
    </Box>
  )
}

export default DefaultLayoutComponent
