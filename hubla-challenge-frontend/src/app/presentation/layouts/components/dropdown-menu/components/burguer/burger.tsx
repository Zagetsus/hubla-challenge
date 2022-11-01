import React, { useState } from 'react';
import { Box } from '~/app/presentation/components';
import makeStyles from './burger-styles';

interface BurgerProps {
  className?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}

function BurgerComponent({ onClick, className, ...props }: BurgerProps) {
  const [open, setOpen] = useState(false);
  const classes = makeStyles();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    onClick(e);
    setOpen(item => !item);
  };

  return (
    <Box
      className={`${classes.container} ${className || ''}`}
      aria-label='Toggle menu'
      aria-expanded={open}
      onClick={handleClick}
      {...props}
    >
      <span className={open ? 'first' : ''} />
      <span className={open ? 'middle' : ''} />
      <span className={open ? 'last' : ''} />
    </Box>
  );
}

export default BurgerComponent;
