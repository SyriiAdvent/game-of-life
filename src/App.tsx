import React from 'react';
import ColorManager from './components/themePalette/ColorManager';
import GameOfLife from './components/gameOfLife/GameOfLife';
import NavigationBar from './components/navbar/NavigationBar';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <ColorManager>
        <NavigationBar />
        <GameOfLife />
      </ColorManager>
    </RecoilRoot>
  );
}

export default App;
