import React from 'react'
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";
import { Card } from '@material-ui/core';
import Grid from './Grid'
import SlideController from '../controls/SlideController'
import PlayerButton from '../controls/PlayerButton';
import { useRecoilValue } from 'recoil'
import { currentGeneration } from '../../stateStore/selecters'

interface StyleProps {
  root: BaseCSSProperties,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: 'column',
      justifyContent: "center",
      flexGrow: 1,
    },
    controlBox: {
      paddingTop: theme.spacing(3.5),
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      width: '100%',
      backgroundColor: '#0c1216',
    },
  })
);

// Main Component to Hold the board
const GameOfLife = () => {
  const cls = useStyles();
  const generation = useRecoilValue(currentGeneration)

  return (
    <div className={cls.root}>
      <Grid />
      <Card elevation={5} className={cls.controlBox} square>
        <h3 
          style={{ textAlign: 'center', marginRight: '0.5rem', color: 'white', display: 'flex' }} 
        >Generation: <div style={{ minWidth: '50px', textAlign: 'left', paddingLeft: '5px' }}>{` ${generation}`}</div></h3>
        <PlayerButton />
        <SlideController  />
      </Card>
    </div>
  )
}

export default GameOfLife