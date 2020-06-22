import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-buttom.component'
import './sign-in.styles.scss';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' })
    const handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = userCredentials;
        emailSignInStart(email, password);
    }

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={userCredentials['email']}
                    label='email'
                    required />

                <FormInput
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={userCredentials['password']}
                    label='password'
                    required />

                <div className='buttons'>
                    <CustomButton type='submit'>SIGN IN</CustomButton>
                    <CustomButton type='button' isGoogleSignIn onClick={googleSignInStart}>SIGN IN WITH GOOGLE</CustomButton>
                </div>

            </form>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);