import { BtnContainer } from './button.style'

const Button = ({ children, ...otherProps }) => (
  <BtnContainer
    className='d-flex justify-content-center fw-bold text-uppercase'
    { ...otherProps }
  >
    { children }
  </BtnContainer>
)

export default Button;
