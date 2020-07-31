import React, { useEffect, useRef, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { rulesModal } from '../../stateStore/atoms'
import { useRecoilState } from 'recoil';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 650,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },

    listItems: {
      marginTop: 2
    },
  }),
);

const RulesModal = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useRecoilState(rulesModal)
  const rulesRef = useRef(openModal)
  rulesRef.current = openModal

  const handleOpen = () => {
    setOpen(true);
    setOpenModal(false)
  };

  const handleClose = () => {
    setOpen(false);
    setOpenModal(false)
  };

  useEffect(() => {
    if (rulesRef.current){
      handleOpen()
    }
  }, [rulesRef.current])

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Conway's Game of Life</h2>
      <p id="simple-modal-description">
        The universe of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:
      </p>
      <ul>
        <li className={classes.listItems}>Any live cell with fewer than two live neighbours dies, as if by underpopulation.</li>
        <li className={classes.listItems}>Any live cell with two or three live neighbours lives on to the next generation.</li>
        <li className={classes.listItems}>Any live cell with more than three live neighbours dies, as if by overpopulation.</li>
        <li className={classes.listItems}>Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.</li>
      </ul>

      <h2 id="simple-modal-title">Controls</h2>
      <p>
        You will find controls below to manage the simulations state:
      </p>

      <ul>
        <li className={classes.listItems}>
          [Random]: Will randomize the live cells on the grid
        </li>
        <li className={classes.listItems}>
          [Show/Hide Grid]: Will enable or disable grid display.
        </li>
        <li className={classes.listItems}>
          [Play/Pause]: Start or Stop simulation 
        </li>
        <li className={classes.listItems}>
          [Skip]: This will skip the current generation by 1 (Disabled when running.)
        </li>
        <li className={classes.listItems}>
          [Life Speed]: You can also control how fast cells generate, or slow!
        </li>
        <li className={classes.listItems}>
          [Presets]: You will see three preset generators above the controls, pause the simulation and try them out!
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default RulesModal