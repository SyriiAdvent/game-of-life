import React from 'react'
import { Theme, createStyles } from "@material-ui/core/styles";
import { Paper, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonsBox: {
      display: "flex",
      justifyContent: "center",
    }
  })
);

const presetController = () => {
  const cls = useStyles()
  return (
    <div>
      <Paper elevation={2} className={cls.buttonsBox}>
        <Button 
          color='primary' 
          onClick={() => null}>Toad
        </Button>
        <Button 
          color='primary' 
          onClick={() => null}>Blinkers
        </Button>
        <Button 
          color='primary' 
          onClick={() => null}>Pulsar
        </Button>
      </Paper>
    </div>
  )
}

export default presetController
