import React from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import './sign-in.style.scss'

class SignIn extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '', 
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault(); 
    this.setState({ email: '', password: '' })
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in d-flex flex-column">
        <h2 className="mt-4 mb-3 fw-semibold">I already have an account</h2>
        <span className="fs-5">Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} >
          <FormInput 
            name="email" 
            type='email' 
            autoComplete='username'
            label='Email'
            value={this.state.email} 
            handleChange={this.handleChange} 
            required 
          /> 
          <FormInput 
            name="password" 
            type='password' 
            autoComplete='current-password'
            label='Password'
            value={this.state.password} 
            handleChange={this.handleChange} 
            required
          /> 

          <div className="d-flex justify-content-between">
            <Button type='submit'>Sign In</Button>
            <Button isGoogleSignIn onClick={signInWithGoogle}>Sign In With Google</Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
