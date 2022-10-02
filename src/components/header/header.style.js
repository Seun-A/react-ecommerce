import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/cart-svgrepo-com.svg'


export const HeaderContainer = styled.div`
  width: calc(100vw - 120px);
  height: 80px;
  
  background: white;
  box-shadow: 0 1px 1px 0 rgba($color: #858585, $alpha: 0.2);
  padding-top: 20px;

  position: fixed;
  top: 0px;
  z-index: 10;

  @media screen and (max-width: 760px) {
    width: calc(100vw - 40px);
  }

  @media only screen and (max-width: 560px) {
    height: 70px;
  }
`


export const LogoContainer = styled(Link)`
  width: 70px;

  @media only screen and (max-width: 560px) {
    width: 50px;
  }
`


export const LogoSvg = styled(Logo)`
  height: 60px;

  @media only screen and (max-width: 560px) {
    height: 50px;
  }
`


export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  transition: all 0.5s ease;
  color: black;

  @media only screen and (max-width: 560px) {
    padding: 10px 10px;
  }

  @media only screen and (max-width: 350px) {
    padding: 10px 7px;
    font-size: 0.85rem;
  }
`
