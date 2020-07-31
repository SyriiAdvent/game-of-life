import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RulesModal from '../gameOfLife/RulesModal';
import { rulesModal } from '../../stateStore/atoms'
import { useRecoilState } from 'recoil';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: 'black'
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
      <AppBar position="static" style={{ backgroundColor: '#0e283d' }}>
        <Toolbar>
          <Typography variant="h6" className={cls.title}>
            The Game of Life
          </Typography>
          <Button 
            color="inherit"
            href="https://github.com/SyriiAdvent/game-of-life"
            target='_blank'
          >GitHub</Button>
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
