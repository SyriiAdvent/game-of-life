import React, { useEffect, useState, useCallback, useRef } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";
import { Paper } from "@material-ui/core";
import Node from "./Node";
import produce from 'immer'
import { useRecoilValue, useRecoilState } from 'recoil';
import { generationState, animSpeed, startGame, nextLife, resetGame } from '../../stateStore/atoms'

interface StyleProps {
  root: BaseCSSProperties;
}
interface IGridSize {
  rows: number;
  cols: number;
}

interface IGrid {
  [x: string]: any;
  [grid: number]: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },

    grid: {
      width: "100%",
      height: "100%",
      display: "grid",
      gridTemplateColumns: `repeat(25, 25px)`,
      // NEED TO PASS IN COL SIZE VIA PROPS
    },
  })
  );

  
  // We will create the grid in this component
  const Grid = () => {
  const cls = useStyles();
  const [generation, setGeneration] = useRecoilState(generationState);
  const [nextFrame, setNextFrame] = useRecoilState(nextLife)
  const [reset, setReset] = useRecoilState(resetGame)
  const speed = useRecoilValue(animSpeed)
  const [grid, setGrid] = useState<IGrid>([]);
  const [gridSize, setGridSize] = useState<IGridSize>({
    cols: 25,
    rows: 20,
  });
  const { rows, cols } = gridSize;
  const neighborPositions = [
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1]
  ]

  const speedRef = useRef(speed)
  speedRef.current = speed
  const nextFrameRef = useRef(nextFrame)
  nextFrameRef.current = nextFrame

  // Sets the grid L x W via (rows, cols) input sizes
  // useCallback so the function doesnt re-run from external component updates with React.strictMode
  const initilizeGrid = useCallback(() => {
    setGrid(() => Array(rows).fill(Array(cols).fill(0)));
  }, [rows, cols]);

  // Setup grid state on component mount
  useEffect(() => {
    initilizeGrid();
  }, [rows, cols]);

  // Handles updating node on click selection
  const nodeSelectUpdater = (col: number, row: number) => {
    const newArr = grid.map((column: any[], i: number) => {
      return column.map((rowPosition: number, j: number) => {
        if (row === j && col === i) {
          return rowPosition === 0 ? 1 : 0
        } else {
          return rowPosition;
        }
      });
    });
    setGrid(newArr);
    console.log(`Updated Node @ [${col}][${row}] to 1`);
  };


  // test game logic zone
  const liveGame = useRecoilValue(startGame)
  const liveRef = useRef(liveGame)
  liveRef.current = liveGame
  const resetRef = useRef(reset)
  resetRef.current = reset

  const simulateAutomata = useCallback(() => {
    if(!liveRef.current && !nextFrameRef.current || resetRef.current) {
      return
    }
    setGrid(origin => {
      return produce(origin, ancestor => {
        for (let i = 0; i < ancestor.length; i++) {
          for (let j = 0; j < ancestor[i].length; j++) {
            let neighbors = 0
            neighborPositions.forEach(([x,y]) => {
              const t = i + x;
              const k = j + y;
              if (t >= 0 && t < rows && k >= 0 && k < cols) {
                neighbors += origin[t][k];
              }
            });
            if (neighbors < 2 || neighbors > 3) {
              ancestor[i][j] = 0;
            } else if (origin[i][j] === 0 && neighbors === 3) {
              ancestor[i][j] = 1;
            }
          }
        }
      })
    })

    if(liveRef.current) {
      setTimeout(simulateAutomata, speedRef.current);
    }
    setGeneration(prev => prev + 1)
  }, [])

  useEffect(() => {
    if(liveRef.current) {
      simulateAutomata()
    }
    if(nextFrameRef.current) {
      simulateAutomata()
      setNextFrame(false)
    }
  }, [liveRef.current, nextFrameRef.current])

  // reset grid and game logic here
  useEffect(() => {
    initilizeGrid()
    setGeneration(0)
    setReset(false)
  }, [resetRef.current])

  const nextGeneration = () => {
    simulateAutomata()
  }

  // test game logic zone

  return (
    <Paper elevation={5} className={cls.root} square>
      <div className={cls.grid}>
        {/* We render all grid nodes here */}
        {grid.map((row: any[], r: number) => {
          return row.map((col: any[], c: number) => (
            <Node
              key={`${r}_${c}`}
              // rename col to status as it'll be a 1 or 0
              isAlive={{ status: col, r, c }}
              nodeSelectUpdater={nodeSelectUpdater}
            />
          ));
        })}
      </div>
    </Paper>
  );
};

export default Grid;
