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
  const sliderText = (value) => `${value}`

  const updateSpeed = (value) => {
    setSpeed(value)
  }

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
        step={50}
        marks
        min={50}
        max={5000}
        valueLabelDisplay="auto"
        onChange={(e, val) => setSpeed(val)}
      />
    </>
  )
}

export default SlideController
