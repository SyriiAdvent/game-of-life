import React, { useState, useEffect } from 'react'

import Grid from './Grid'


// reference so i dont forget what a Interface looks like :)
// interface IGeneration {
//   generation: number
// }

// Main Component to Hold the board
const GameOfLife = () => {
  const [generation, setGeneration] = useState<number>(0)

  const nextGeneration = () => {
    setGeneration(generation + 1)
  }

  return (
    <div>
      <Grid />
      <h4>Generation: {generation}</h4>
    </div>
  )
}




export default GameOfLife
