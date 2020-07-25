import React from 'react'
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Node from './Node'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },

    paper: {
      color: '#272C34'
    },
  }),
);
// We will create the grid in this component
const Grid = () => {
  const cls = useStyles();
  const gridSize = 0;

  return (
    <div className={cls.root}>
      <Paper elevation={3} className={cls.paper} />
    </div>
  )
}

export default Grid
