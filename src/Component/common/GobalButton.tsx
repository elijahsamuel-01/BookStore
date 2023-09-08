import React from 'react'
import styled from 'styled-components'

interface iButton {
  text: string;
  bcc:string;
  color: string;
  height: string;
  width: string;
  bor: string;
  mR:string;
  font:string;
}

const Globalbutto:React.FC<iButton> = ({
text,color,bcc,height,width,bor,mR, font
}) => {
  return (
    <Button bcc={bcc} color={color} height={height} width={width} bor={bor} mR={mR} font={font}>
      {text}
    </Button>
  )
}

export default Globalbutto

const Button = styled.button<{bcc:string;color:string;height:string;width:string;bor:string; mR:string; font:string;}>`
background-color:${({bcc})=>bcc};
padding:5px 5px 5px 5px;
color:${({ color }) => color};
height:${({ height }) => height};
width:${({ width }) => width};
border-radius:${({ bor }) => bor};
margin-right: ${({ mR })=> mR};
font-size: ${({ font })=> font};
border: 1px solid lightgray;
cursor:poniter;

@media screen and (max-width: 780px) {
        /* display: none; */
    }
`