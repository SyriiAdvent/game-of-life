import React, { useState, useEffect }  from 'react'
import styled from 'styled-components'
import { mouseStatus, showGrid } from '../../stateStore/selecters'
import { useRecoilValue } from 'recoil'
import { randColorGenerator } from '../../utils/randomColorGen'
import { checkRandColor } from '../../stateStore/selecters'


// you must type declare any passed in props with TS & Styled-Components
const StyledNode = styled.div<{ status: number, border: boolean }>`
  display: flex;
  min-width: 20px;
  min-height: 20px; 
  background-color: ${props => (props.status === 1 ? props.color : '#0c1216')};
  box-shadow: ${props => props.border ?
    `0 1px 0 0 #182228, 0 -1px 0 0 #182228, -1px 0 0 0 #182228, 1px 0 0 0 #182228, 0 0 0 1px #182228;` : 'none'};


  &:hover {
    background-color: #27A9FF;
    transform: scale(1.25);
    transition-duration: 50;
  }
`;


// How each grid Node will be represented
const Node = (props: any) => {
  const [color, setColor] = useState<string>()
  const mouseDown = useRecoilValue(mouseStatus)
  const border = useRecoilValue(showGrid)
  const randColor = useRecoilValue(checkRandColor)
  const { isAlive: { status, r, c } } = props

  useEffect(() => {
    if(randColor) {
      setColor(randColorGenerator('#0078db'))
    } else {
      setColor('#0078db')
    }
    
  }, [randColor])

  return (
    <StyledNode
      border={border}
      status={status}
      color={color}
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