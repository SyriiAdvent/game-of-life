import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";
import Grid from './Grid'
import SlideController from '../controls/SlideController'
import PlayerButton from '../controls/PlayerButton';
import { useRecoilValue, useRecoilState } from 'recoil'
import { currentGeneration } from '../../stateStore/selecters'
import { animSpeed } from '../../stateStore/atoms'

interface StyleProps {
  root: BaseCSSProperties,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
    },
    speedSlider: {
      width: 500
    }
  })
);


// Main Component to Hold the board
const GameOfLife = () => {
  const cls = useStyles();
  const [speed, setSpeed] = useRecoilState(animSpeed)
  const generation = useRecoilValue(currentGeneration)

  return (
    <div className={cls.root}>
      <Grid />
      <div>
        <h4>Generation: {generation}</h4>
        <PlayerButton />
        <SlideController />
      </div>
    </div>
  )
}

export default GameOfLife