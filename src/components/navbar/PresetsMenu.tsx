import React from 'react'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const PresetsMenu = () => {
  const [presetsMenus, setPresetsMenus] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPresetsMenus(event.currentTarget);
  };

  const handleClose = () => {
    setPresetsMenus(null);
  };
  
  return (
    <div>
      <Button style={{ color: 'white' }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        Presets
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={presetsMenus}
        keepMounted
        open={Boolean(presetsMenus)}
        onClose={handleClose}
      >
        {/* <MenuItem onClick={handleClose}>Random</MenuItem> */}
        <MenuItem onClick={handleClose}>Pulsar</MenuItem>
        <MenuItem onClick={handleClose}>Beacon</MenuItem>
        <MenuItem onClick={handleClose}>Toad</MenuItem>
        <MenuItem onClick={handleClose}>Pentadecathlon</MenuItem>
      </Menu>
    </div>
  );
}

export default PresetsMenu
