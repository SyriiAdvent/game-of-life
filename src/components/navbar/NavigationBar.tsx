import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Switch } from '@material-ui/core';
import PresetsMenu from './PresetsMenu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'center',
    },
  }),
);

const NavigationBar = () => {
  const cls = useStyles();

  return (
    <div className={cls.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <PresetsMenu /> */}
          {/* <IconButton edge="start" className={cls.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          
          <Typography variant="h6" className={cls.title}>
            The Game of Life
          </Typography>
          {/* <Switch /> temporary until actual theme changer */}
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
