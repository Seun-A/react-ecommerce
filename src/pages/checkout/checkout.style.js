import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 90vh;

  margin: 50px auto 0;

  button { margin: 30px 0 30px auto; }
`

export const CheckoutHeader = styled.div`
  min-width: 400px;
  padding: 10px 0;
  border-bottom: 1px solid darkgrey;
`

export const CheckoutHeaderBlock = styled.div`
  width: 23%;

  &:last-child { width: 50px; }
`

export const CheckoutTotal = styled.div`
  font-size: 36px;
`
