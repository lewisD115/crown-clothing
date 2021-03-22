import { Component } from "react";
import { connect } from 'react-redux';

import { SignInContainer, SignInButtonsContainer } from "./sign-in.styles";

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';


class SignIn extends Component {
  constructor(props) {

    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  // eslint-disable-next-line no-undef
  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  // eslint-disable-next-line no-undef
  handleChange = event => {
    const { value, name } = event.target; 

    this.setState({ [name]: value})
  };

  render() {
    const { googleSignInStart } = this.props;
    return(
      <SignInContainer>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name="email"
            type="email"
            value={this.state.email} 
            handleChange={this.handleChange} 
            label="email"
            required/>
          <FormInput 
            name="password" 
            type="password" 
            value={this.state.password} 
            handleChange={this.handleChange}
            label="password"
            required/>
          <SignInButtonsContainer>
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn> 
              {' '}
              Sign in with Google{' '}
            </CustomButton>
          </SignInButtonsContainer>
         

        </form>
      </SignInContainer>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);