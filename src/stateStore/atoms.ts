import { atom } from "recoil"

export const generationState = atom({
  key: 'generationState',
  default: 0,
});

export const grid = atom({
  key: 'grid',
  default: [],
});

export const gridSize = atom({
  key: 'generation',
  default: {
    cols: 25,
    rows: 20
  }
});

// Controller Atoms

export const animSpeed = atom({
  key: 'animSpeed',
  default: 500,
});

export const startGame = atom({
  key: 'startGame',
  default: false
})

export const nextLife = atom({
  key: 'nextLife',
  default: false
})