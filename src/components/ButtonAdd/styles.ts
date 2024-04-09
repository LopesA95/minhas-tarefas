import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Circle = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 40px;
  text-decoration: none;
`
