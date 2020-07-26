import React, { useEffect, useState, useCallback } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import { BaseCSSProperties } from "@material-ui/core/styles/withStyles";
import { Container, Paper } from "@material-ui/core";
import Node from "./Node";

interface IGrid {
  rows: number,
  cols: number
}

interface StyleProps {
  root: BaseCSSProperties,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center'
    },

    grid: {
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: `repeat(25, 20px)`,
    }
  })
);

// We will create the grid in this component
const Grid = () => {
  const cls = useStyles();
  const [grid, setGrid] = useState<any[]>([]);
  const [gridSize, setGridSize] = useState<IGrid>({
    rows: 25,
    cols: 25
  })
  const { rows, cols } = gridSize

  // Sets the grid L x W via (rows, cols) input sizes
  // useCallback so the function doesnt re-run from external component updates with React.strictMode
  const initilizeGrid = useCallback(() => {
    setGrid(() => {
      const arrGrid: any[] = [];
      for (let index = 0; index < rows; index++) {
        arrGrid.push(Array.from(Array(cols), () => 0));
      }
      return arrGrid;
    });
  }, [])

  // Setup grid state on component mount
  useEffect(() => {
    initilizeGrid();
  }, [rows, cols]);

  return (
    <Paper elevation={5} className={cls.root} square>
      <div className={cls.grid} >
        {grid.map((row: any[], r: number) => {
          return row.map((col: any[], c: number) => <Node key={`${r}_${c}`} />);
        })}
      </div>
    </Paper >
  );
};

export default Grid;
