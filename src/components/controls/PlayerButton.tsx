import React from 'react'
import { useRecoilState } from 'recoil'
import { startGame, nextLife, resetGame } from '../../stateStore/atoms'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ReplayIcon from '@material-ui/icons/Replay';

const PlayerButton = () => {
  const [liveGame, setLiveGame] = useRecoilState(startGame)
  const [nextFrame, setNextFrame] = useRecoilState(nextLife)
  const [reset, setReset] = useRecoilState(resetGame)
  return (
    <div>
      <IconButton
        color={!liveGame ? 'primary' : 'secondary'}
        onClick={() => setLiveGame(prev => !prev)}
        >{liveGame ?
         <PauseIcon />
         : 
         <PlayArrowIcon />}
      </IconButton>
      <IconButton
        color='secondary'
        onClick={() => {
          if(!nextFrame) {
            setNextFrame(true)
          }
        }}
      ><NavigateNextIcon /></IconButton>
      <IconButton
        color='primary'
        onClick={() => setReset(true)}
      ><ReplayIcon /></IconButton>
    </div>
  )
}

export default PlayerButton
