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
const Grid = () => {
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
          return 1;
        } else {
          return rowPosition;
        }
      });
    });
    setGrid(newArr);
    console.log(`Updated Node @ [${col}][${row}] to 1`);
  };

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
