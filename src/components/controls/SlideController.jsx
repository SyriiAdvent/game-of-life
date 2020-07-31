import React from 'react'
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Paper } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { useRecoilState } from 'recoil'
import { animSpeed } from '../../stateStore/atoms'

//force animate slider if user clicks
import './SlideController.css'

const useStyles = makeStyles((theme) =>
  createStyles({
    slideCard: {
      width: 400,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0c1216',
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
  const sliderText = (val) => `${val}ms`
  const updateSpeed = (value) => {
    setSpeed(value)
  }
  const marks = [
    {
      value: 0,
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
    <Paper className={cls.slideCard} elevation={0}>
      {/* <Typography id="discrete-slider-small-steps" gutterBottom>
        Life Speed
        </Typography> */}
        <Slider
        value={speed}
        className={cls.speedSlider}
        defaultValue={speed}
        getAriaValueText={sliderText}
        aria-labelledby="discrete-slider-small-steps"
        step={100}
        marks={marks}
        min={0}
        max={3000}
        valueLabelDisplay="auto"
        onChange={(e, val) => updateSpeed(val)}
      />
    </Paper>
  )
}

export default SlideController
