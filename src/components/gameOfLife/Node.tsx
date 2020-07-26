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
      border: 'solid #616363 1px',
      
      '&:hover': {
        // opacity: 0,
        backgroundColor: '#27A9FF',
        transform: 'scale(1.25)',
        // transition: 'opacity 2s ease-in',
        transitionDuration: 300,
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
