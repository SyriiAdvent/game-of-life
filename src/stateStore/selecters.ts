import { selector } from 'recoil'
import { generationState, animSpeed } from './atoms'

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