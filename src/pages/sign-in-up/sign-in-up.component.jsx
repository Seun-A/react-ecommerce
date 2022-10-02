import { SignInUpContainer } from "./sign-in-up.component.style"

import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"


const SignInUpPage = () => (
  <SignInUpContainer className="sign-in-up">
    <SignIn />
    <SignUp />
  </SignInUpContainer>
)

export default SignInUpPage;
