import { atom } from 'recoil'

export const gridState = atom({
  key: 'gridState',
  default: []
})

export const gridSizeState = atom({
  key: 'gridSizeState',
  default: {
    cols: 25,
    rows: 25,
    cellSize: 20
  }
})


export const randColorState = atom({
  key: 'randColorState',
  default: false
})