import styled, { css } from 'styled-components'

const invertedBtnStyles = css`
  color: black;
  background-color: white;
  border: 1px solid black;

  &:hover {
    color: white;
    background-color: black;
    border: none;
  }
`

const googleSignInBtn = css`
  color: white;
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const getBtnStyles = props => {
  return props.isGoogleSignIn
    ? googleSignInBtn
    : props.inverted
      ? invertedBtnStyles
      : null
}


export const BtnContainer = styled.button`
  width: auto;
  min-width: 165px;
  height: 50px;

  color: white;
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 50px;

  border: none;
  padding: 0 35px;
  background-color: black;
  cursor: pointer;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }

  ${getBtnStyles}

  @media only screen and (max-width: 850px) {  
    min-width: 130px;
    padding: 0 20px;
  }
`
