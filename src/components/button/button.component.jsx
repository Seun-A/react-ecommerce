import './button.style.scss'

const Button = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
  <button
    className={`
      custom-btn
      d-flex justify-content-center
      fw-bold text-uppercase
      ${ isGoogleSignIn ? 'google-sign-in' : '' }
      ${ inverted ? 'inverted' : '' }
    `}
    { ...otherProps }
  >
    { children }
  </button>
)

export default Button;
