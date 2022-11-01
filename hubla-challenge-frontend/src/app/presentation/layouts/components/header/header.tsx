import { AppBar, Box, SearchInputTag } from '~/app/presentation/components';
import {
  AccountMenuTag,
  DropdownMenuTag
} from '~/app/presentation/layouts/components';
import makeStyles from './header-styles';

function HeaderComponent() {
  const classes = makeStyles();
  return (
    <AppBar className={classes.appBar}>
      <Box className={classes.appBarContentWrap}>
        <Box className={`${classes.accountWrap} web`} />
        <Box className={classes.searchBox}>
          <SearchInputTag placeholder={'Buscar por....'} />
        </Box>
        <Box className={classes.accountWrap}>
          <DropdownMenuTag>
            <AccountMenuTag />
          </DropdownMenuTag>
        </Box>
      </Box>
    </AppBar>
  );
}

export default HeaderComponent;
