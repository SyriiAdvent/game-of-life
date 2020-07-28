import React, { useEffect } from 'react';
import ColorManager from './components/themePalette/ColorManager';
import GameOfLife from './components/gameOfLife/GameOfLife';
import NavigationBar from './components/navbar/NavigationBar';
import { useRecoilState } from 'recoil';
import { mouseDownState } from './stateStore/atoms'


const mouseChecker = window.addEventListener('mousedown', () => {
  
})

function App() {
  const [mouseDown, setMouseDown] = useRecoilState(mouseDownState)

  useEffect(() => {
    window.addEventListener('mousedown', () => {
      setMouseDown(true)
    })
    window.addEventListener('mouseup', () => {
      setMouseDown(false)
    })
    return () => {
      window.removeEventListener('mousedown', () => null)
      window.removeEventListener('mouseup', () => null)
    }
  }, [])

  return (
    <ColorManager>
      <NavigationBar />
      <GameOfLife />
    </ColorManager>
  );
}

export default App;
