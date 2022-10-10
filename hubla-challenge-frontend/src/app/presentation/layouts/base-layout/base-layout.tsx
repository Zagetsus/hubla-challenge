import {Head} from "next/document";
import {Box, Toolbar} from "~/app/presentation/components";
import {BaseLayoutProps} from "~/app/presentation/layouts/base-layout/base-layout-props.interface";
import makeStyles from './base-layout-styles';

function BaseLayoutComponent({children}: BaseLayoutProps) {
  const classes = makeStyles();
  
  return(
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

export default BaseLayoutComponent
