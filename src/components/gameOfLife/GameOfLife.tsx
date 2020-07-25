import React, { useState, useEffect } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

import Grid from './Grid'


// reference so i dont forget what a Interface looks like :)
// interface IGeneration {
//   generation: number
// }

const generationState = atom({
  key: 'generationState',
  default: 0
})

// Main Component to Hold the board
const GameOfLife = () => {
  const [generation, setGeneration] = useRecoilState(generationState)
  
  // another way to read a atoms state
  // const genCount = useRecoilValue(generationState)

  const nextGeneration = () => {
    setGeneration(generation + 1)
  }

  return (
    <div>
      <Grid />
      <h4>Generation: {generation}</h4>
      <button onClick={() => nextGeneration()} >genUP</button>
    </div>
  )
}




export default GameOfLife
