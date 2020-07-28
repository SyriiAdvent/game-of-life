import React from 'react'
import { useRecoilState } from 'recoil'
import { startGame } from '../../stateStore/atoms'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { findByLabelText } from '@testing-library/react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }),
);

const PlayerButton = () => {
  const [liveGame, setLiveGame] = useRecoilState(startGame)
  return (
    <Button variant='outlined' color={!liveGame ? 'primary' : 'secondary'}
      onClick={() => setLiveGame(prev => !prev)}
    >{liveGame ? "stop" : "start"}</Button>
  )
}

export default PlayerButton
