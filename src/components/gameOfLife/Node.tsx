import React, { useState } from 'react'
import styled from 'styled-components'
import { mouseStatus } from '../../stateStore/selecters'
import { useRecoilValue } from 'recoil'


// you must type declare any passed in props with TS & Styled-Components
const StyledNode = styled.div<{ status: number }>`
  display: flex;
  width: 25px;
  height: 25px; 
  background-color: ${props => (props.status === 1 ? 'black' : 'white')};
  border: solid #616363 1px;
  
  &:hover {
    background-color: #27A9FF;
    transform: scale(1.25);
    transition-duration: 50;
  }
  `;


// How each grid Node will be represented
const Node = (props: any) => {
  const mouseDown = useRecoilValue(mouseStatus)
  const { isAlive: { status, r, c } } = props

  return (
    <StyledNode 
      status={status}
      onClick={() => {
        // sends back cordinates of node
        props.nodeSelectUpdater(r, c)
      }}
      onMouseEnter={() => {
        if(mouseDown) {
          props.nodeSelectUpdater(r, c)
        }
      }}
    />
  )
}

export default Node
