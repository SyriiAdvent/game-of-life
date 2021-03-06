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

export const resetGame = atom({
  key: 'resetGame',
  default: false
})

export const mouseDownState = atom({
  key: 'mouseDownState',
  default: false
})

export const gridStatus = atom({
  key: 'gridStatus',
  default: false
})

export const randomizeGrid = atom({
  key: 'randomizeGrid',
  default: false
})

// Game Rules Atom

export const rulesModal = atom({
  key: 'rulesModal',
  default: true,
});
