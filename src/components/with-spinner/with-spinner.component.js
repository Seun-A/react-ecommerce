import { SpinnerContainer, SpinnerOverlay } from './with-spinner.style'

const WithSpinner = Component => ({ isLoading }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <Component />
  )
}

export default WithSpinner;
