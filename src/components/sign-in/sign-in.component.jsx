import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' });
        } catch (error) {
            console.log(error.message);
        }
        this.setState({ email: '', password: '' })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        onChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required />

                    <FormInput
                        name='password'
                        type='password'
                        onChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required />

                    <div className='buttons'>
                        <CustomButton type='submit'>SIGN IN</CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;