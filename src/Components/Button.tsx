import React from 'react'
import { ButtonWrapper } from './StyledComponents/StyledComponents'
interface IbuttonProps {
  name: string
  onClick: () => void
}

function Button({ name, onClick }: IbuttonProps) {
  return <ButtonWrapper  onClick={onClick} >{name}</ButtonWrapper>
}
export default Button
