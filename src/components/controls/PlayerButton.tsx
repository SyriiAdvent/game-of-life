import React from 'react'
import { useRecoilState } from 'recoil'
import { startGame, nextLife, resetGame, generationState, gridStatus, randomizeGrid } from '../../stateStore/atoms'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ReplayIcon from '@material-ui/icons/Replay';

import GridOffIcon from '@material-ui/icons/GridOff';
import GridOnIcon from '@material-ui/icons/GridOn';

const PlayerButton = () => {
  const [liveGame, setLiveGame] = useRecoilState(startGame)
  const [generation, setGeneration] = useRecoilState(generationState);
  const [nextFrame, setNextFrame] = useRecoilState(nextLife)
  const [reset, setReset] = useRecoilState(resetGame)
  const [showGrid, setShowGrid] = useRecoilState(gridStatus)
  const [random, setRandom] = useRecoilState(randomizeGrid)
  return (
    <div>
      <Button 
        color='primary'
        onClick={() => setRandom(true)}
      >Random</Button>
      <IconButton
        color='primary'
        onClick={() => setShowGrid(prev => !prev)}
      >{showGrid ? <GridOnIcon /> : <GridOffIcon />}</IconButton>
      <IconButton
        color={!liveGame ? 'primary' : 'secondary'}
        onClick={() => setLiveGame(prev => !prev)}
        >{liveGame ?
         <PauseIcon />
         : 
         <PlayArrowIcon />}
      </IconButton>
      <IconButton
        disabled={liveGame}
        color='secondary'
        onClick={() => {
          if(!nextFrame) {
            setNextFrame(true)
          }
        }}
      ><NavigateNextIcon /></IconButton>
      <IconButton
        color='primary'
        onClick={() => {
          setLiveGame(() => false)
          setReset(true)
          }
        }
      ><ReplayIcon /></IconButton>
    </div>
  )
}

export default PlayerButton
