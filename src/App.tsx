import React, { useEffect } from 'react';
import ColorManager from './components/themePalette/ColorManager';
import GameOfLife from './components/gameOfLife/GameOfLife';
import styled from 'styled-components'
import NavigationBar from './components/navbar/NavigationBar';
import { useRecoilState } from 'recoil';
import { mouseDownState } from './stateStore/atoms'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  /* background-color: white */

`

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
    <MainContainer >
      <NavigationBar />
      <GameOfLife />
    </MainContainer>
  )
}

export default App;
