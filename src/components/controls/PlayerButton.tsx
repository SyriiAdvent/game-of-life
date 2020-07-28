import React from 'react'
import { useRecoilState } from 'recoil'
import { startGame, nextLife } from '../../stateStore/atoms'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const PlayerButton = () => {
  const [liveGame, setLiveGame] = useRecoilState(startGame)
  const [nextFrame, setNextFrame] = useRecoilState(nextLife)
  return (
    <div>
      <IconButton
        color={!liveGame ? 'default' : 'secondary'}
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
    </div>
  )
}

export default PlayerButton
