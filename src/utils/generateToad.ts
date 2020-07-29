import produce from 'immer'

export const generateToad = (arr: any) => {
  return produce(arr, (toad: any[]) => {
    const x = Math.floor(toad.length / 2)
    const y = Math.floor(toad[x].length / 2)
    for (let i = y; i < y + 3; i++) {
      toad[x][i] = 1
    }
    for (let i = y - 1; i < y + 2; i++) {
      toad[x + 1][i] = 1
    }
  })
}