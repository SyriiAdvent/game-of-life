import React from 'react'
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";

interface StyleProps {
  root: BaseCSSProperties,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    node: {
      display: 'flex',
      width: '20px', 
      height: '20px', 
      backgroundColor: 'white', 
      border: 'solid grey 1px',

      '&:hover': {
        backgroundColor: '#27A9FF'
      },
    },
  })
);

// How each grid Node will be represented
const Node = () => {
  const cls = useStyles();
  return (
    <div className={cls.node} />
  )
}

export default Node
