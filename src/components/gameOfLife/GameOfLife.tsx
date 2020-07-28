import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";
import { Card, Paper } from '@material-ui/core';
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
      padding: theme.spacing(1),
      // width: "99%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      // backgroundColor: '#F5F5F5'
    },
    controlBox: {
      margin: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: 800,
      backgroundColor: '#F0F0F0'
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
      <Card elevation={2} className={cls.controlBox}>
        <h4>Generation: {generation}</h4>
        <PlayerButton />
        <SlideController  />
      </Card>
    </div>
  )
}

export default GameOfLife