import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Switch } from '@material-ui/core';
import PresetsMenu from './PresetsMenu';
import RulesModal from '../gameOfLife/RulesModal';
import { rulesModal } from '../../stateStore/atoms'
import { useRecoilState } from 'recoil';

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
  const [openModal, setOpenModal] = useRecoilState(rulesModal)

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
          <Button 
            color="inherit"
            onClick={() => setOpenModal(true)}
          >Rules</Button>
          <RulesModal />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
