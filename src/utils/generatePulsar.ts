import produce from 'immer'

export const generatePulsar = (arr: any) => {
  const mewarr = produce(arr, (pulsar: any[]) => {
    const x = Math.floor(pulsar.length / 2)
    const y = Math.floor(pulsar[x].length / 2)
    const pillar = 3
    for (let i = y - 7; i < y - 4; i++) {
      // Vertical Pilars
      pulsar[i][y - pillar] = 1 // topLeft
      pulsar[i][y + pillar] = 1 // topRight
      pulsar[i + 12][y - pillar] = 1 // bottomLeft
      pulsar[i + 12][y + pillar] = 1 // bottomRight
    }
    // top middle pillars
    for (let i = y - 4; i <= y + 10; i++) {
      if (i === y - 7 + 6 ||
          i === y - 7 + 7 || 
          i === y - 7 + 10 ||
          i === y - 7 + 13 ||
          i === y - 7 + 14) {
        pulsar[x - 3][i - pillar] = 0;
      } else {
        pulsar[x - 3][i - pillar] = 1;
      }
    }
    // bottom middle pillars
    for (let i = y - 4; i <= y + 10; i++) {
      if (i === y - 7 + 6 ||
          i === y - 7 + 7 || 
          i === y - 7 + 10 ||
          i === y - 7 + 13 ||
          i === y - 7 + 14) {
        pulsar[x + 3][i - pillar] = 0;
      } else {
        pulsar[x + 3][i - pillar] = 1;
      }
    }
    // top mid box
    for (let i = y - 7; i <= y + 10; i++) {
      if (i <= y - 7 + 4 ||
        i === y - 7 + 6 || 
        i === y - 7 + 8 ||
        i === y - 7 + 10 ||
        i === y - 7 + 12 ||
        i === y - 7 + 14 ||
        i > y - 7 + 15) {
        pulsar[x - 2][i - pillar] = 0;
      } else {
        pulsar[x - 2][i - pillar] = 1;
      }
      if(i === y - 7 + 7 ||
        i === y - 7 + 8 ||
        i === y - 7 + 12 ||
        i === y - 7 + 13) {
        pulsar[x - 1][i - pillar] = 1;
      }
    }
    // bottom mid box
    for (let i = y - 7; i <= y + 10; i++) {
      if (i <= y - 7 + 4 ||
        i === y - 7 + 6 || 
        i === y - 7 + 8 ||
        i === y - 7 + 10 ||
        i === y - 7 + 12 ||
        i === y - 7 + 14 ||
        i > y - 7 + 15) {
        pulsar[x + 2][i - pillar] = 0;
      } else {
        pulsar[x + 2][i - pillar] = 1;
      }
      if(i === y - 7 + 7 ||
        i === y - 7 + 8 ||
        i === y - 7 + 12 ||
        i === y - 7 + 13) {
        pulsar[x + 1][i - pillar] = 1;
      }
      // Adds 4 cells for the 4 outside pillars
      if(i === y - 7 + 8 ||
        i === y - 7 + 12){
        pulsar[x - 5][i - pillar] = 1;
        pulsar[x + 5][i - pillar] = 1;
      }
    }
  })
  console.log(mewarr)
  return mewarr
}