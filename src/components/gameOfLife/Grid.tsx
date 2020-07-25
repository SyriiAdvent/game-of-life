import React, { useEffect, useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Node from "./Node";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(1),
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },

    node: {
      width: '20px', 
      height: '20px', 
      backgroundColor: 'cyan'
    },

    paper: {
      width: 400,
      height: 300,
    },
  })
);

// We will create the grid in this component
const Grid = () => {
  const cls = useStyles();
  const [grid, setGrid] = useState([]);
  const rows = 50;
  const cols = 50;

  const initilizeGrid = () => {
    setGrid(() => {
      const arrGrid: any[] = [];
      for (let index = 0; index < rows; index++) {
        arrGrid.push(Array.from(Array(cols), () => 0));
      }
      return arrGrid;
    });
  };

  useEffect(() => {
    initilizeGrid();
  }, [grid]);

  return (
    <div className={cls.root}>
      {console.log(grid)}
      <div>
        {grid.length > 2 ? grid.map((row, r) => {
          row.map((col, c) => <div key={`${r}_${c}`} className={cls.node}/>);
        }): null}
      </div>
    </div>
  );
};

export default Grid;
