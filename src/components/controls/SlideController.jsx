import React from 'react'
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import { useRecoilState } from 'recoil'
import { animSpeed } from '../../stateStore/atoms'

const useStyles = makeStyles(() =>
  createStyles({
    speedSlider: {
      width: 500
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
    <>
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
    </>
  )
}

export default SlideController
