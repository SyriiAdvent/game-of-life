import React, { useEffect, useState, useCallback, useRef } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";
import { Paper } from "@material-ui/core";
import Node from "./Node";

interface IGrid {
  rows: number;
  cols: number;
}

interface StyleProps {
  root: BaseCSSProperties;
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
      gridTemplateColumns: `repeat(15, 25px)`,
      // NEED TO PASS IN COL SIZE VIA PROPS
    },
  })
);

// We will create the grid in this component
const Grid = (props: { generation: number }) => {
  const cls = useStyles();
  const [grid, setGrid] = useState<any[]>([]);
  const [gridSize, setGridSize] = useState<IGrid>({
    cols: 15,
    rows: 15,
  });
  const { rows, cols } = gridSize;



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
  const [liveGame, setLiveGame] = useState(false)

  const liveRef = useRef(liveGame)
  liveRef.current = liveGame

  const startGame = () => {
    setLiveGame(prev => {
      return !prev
    })
  }

  const simulateAutomata = useCallback(() => {
    const anscestor = [...grid]

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

    if(!liveRef.current) {
      return
    } else {
      for (let i = 0; i < anscestor.length; i++) {
        for (let j = 0; j < anscestor[i].length; j++) {
          let neighbors = 0
          neighborPositions.forEach(([x,y]) => {
            const t = i + x;
            const k = j + y;
            if (t >= 0 && t < rows && k >= 0 && k < cols) {
              neighbors += grid[t][k];
            }
          });
          if (neighbors < 2 || neighbors > 3) {
            anscestor[i][j] = 0;
          } else if (grid[i][j] === 0 && neighbors === 3) {
            anscestor[i][j] = 1;
          }
        }
      }
    }

    setGrid(anscestor)
    setTimeout(simulateAutomata, 1000);
  }, [])

  // test game logic zone

  console.log(grid);

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
        <button 
          onClick={() => {
            startGame()
            if(liveGame) {
              liveRef.current = true
              simulateAutomata()
            }
          }}
          >test grid</button>
      </div>
    </Paper>
  );
};

export default Grid;
