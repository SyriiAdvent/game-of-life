import React, { useState } from 'react';
import ColorManager from './components/themePalette/ColorManager';
import GameOfLife from './components/gameOfLife/GameOfLife';
import NavigationBar from './components/navbar/NavigationBar';

function App() {
  return (
    <ColorManager>
      <NavigationBar />
      <GameOfLife />
    </ColorManager>
  );
}

export default App;
