import React from 'react'
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography, Paper } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { useRecoilState } from 'recoil'
import { animSpeed } from '../../stateStore/atoms'

const useStyles = makeStyles((theme) =>
  createStyles({
    slideCard: {
      width: 400,
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    speedSlider: {
      width: 350,
      // margin: theme.spacing(2),
    }
  })
);

const SlideController = () => {
  const cls = useStyles();
  const [speed, setSpeed] = useRecoilState(animSpeed)
  const sliderText = (value) => `${value}ms`
  const updateSpeed = (value) => {
    setSpeed(value)
  }
  const marks = [
    {
      value: 100,
      label: 'Fast',
    },
    {
      value: 500,
      label: 'Normal',
    },
    {
      value: 1000,
      label: 'Slower',
    },
    {
      value: 2000,
      label: 'Slow',
    },
    {
      value: 3000,
      label: 'Slow-Mo!',
    },
  ];
  
  return (
    <Paper className={cls.slideCard}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Life Speed
        </Typography>
        <Slider
        value={speed}
        className={cls.speedSlider}
        defaultValue={speed}
        getAriaValueText={sliderText}
        aria-labelledby="discrete-slider-small-steps"
        step={100}
        marks={marks}
        min={100}
        max={3000}
        valueLabelDisplay="auto"
        onChange={(e, val) => setSpeed(val)}
      />
    </Paper>
  )
}

export default SlideController
