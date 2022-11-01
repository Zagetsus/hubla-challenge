import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Menu,
  Typography,
  Slide
} from '~/app/presentation/components';
import { ArrowDownIcon } from '~/app/presentation/components/icons';
import { BurgerTag } from '~/app/presentation/layouts/components/dropdown-menu/components';
import { DropdownMenuProps } from '~/app/presentation/layouts/components/dropdown-menu/dropdown-menu-props.interface';
import makeStyles, { componentProps, paperProps } from './dropdown-menu-styles';

function AccountMenuComponent({ children }: DropdownMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl) {
      handleClose();
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = makeStyles();
  return (
    <>
      <Box
        onClick={handleClick}
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        className={classes.container}
      >
        <Typography className={classes.text}>Olá, Pedro Sérgio</Typography>
        <Box className={classes.avatarBox}>
          <Avatar alt='Meu perfil' className={classes.avatar} />
          <ArrowDownIcon
            data-testid='arrow-down'
            style={{
              marginLeft: 3,
              transform: open ? 'rotate(-180deg)' : undefined,
              transition: '.2s'
            }}
          />
        </Box>
      </Box>
      <BurgerTag
        className={classes.burgerMenu}
        onClick={handleClick}
        aria-controls={open ? 'dropdown-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
      />
      <Menu
        id='dropdown-menu'
        anchorEl={anchorEl}
        open={open}
        TransitionComponent={Slide}
        componentsProps={componentProps}
        PaperProps={paperProps}
        onClose={handleClose}
        onClick={handleClose}
      >
        {children}
      </Menu>
    </>
  );
}

export default AccountMenuComponent;
