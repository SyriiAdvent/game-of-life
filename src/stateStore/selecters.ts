import { selector } from 'recoil'
import { generationState, animSpeed, mouseDownState, gridStatus } from './atoms'
import { randColorState } from './gridAtoms'

export const currentGeneration = selector({
  key: 'currentGeneration',
  get: ({get}) => {
    const state = get(generationState)
    return state
  },
})

export const currentSpeed = selector({
  key: 'currentSpeed',
  get: ({get}) => {
    const state = get(animSpeed)
    return state
  },
})

export const mouseStatus = selector({
  key: 'mouseStatus',
  get: ({get}) => {
    const state = get(mouseDownState)
    return state
  },
})

export const showGrid = selector({
  key: 'showGrid',
  get: ({get}) => {
    const state = get(gridStatus)
    return state
  },
})

export const checkRandColor = selector({
  key: 'checkRandColor',
  get: ({get}) => {
    const state = get(randColorState)
    return state
  },
})