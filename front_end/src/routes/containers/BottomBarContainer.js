import { React, useState } from 'react';
import BottomBar from '../components/BottomBar';

const BottomBarContainer = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <BottomBar 
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
      id={id}
      open={open}
    />
  );
};

export default BottomBarContainer;