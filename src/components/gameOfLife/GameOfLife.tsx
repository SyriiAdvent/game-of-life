import React, { useState } from 'react'
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";
import Grid from './Grid'


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
  })
);

// Main Component to Hold the board
const GameOfLife = () => {
  const cls = useStyles();
  const [generation, setGeneration] = useState<number>(0)

  const nextGeneration = () => {
    setGeneration(prev => {
      return prev + 1
    })
  }

  return (
    <div className={cls.root}>
      <div>
        <h4>Generation: {generation}</h4>
        <button onClick={() => nextGeneration()} >next</button>
      </div>
      <Grid generation={generation} />
    </div>
  )
}

export default GameOfLife