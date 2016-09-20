import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const LoginForm = ({ error, onSubmit }) => {

    let email, password;

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                onSubmit(email.value, password.value);
            }}
        >

            <div className="logo"></div>
            <h3>Log In to your account</h3>

            { error &&
            <div className="error">{ error }</div>
            }

            <input type="text" placeholder="E-mail" ref={ node => email = node }/>
            <input type="password" placeholder="Password" ref={ node => password = node }/>

            <button type="submit" className="btn btn-large">Log In</button>

            <small>
                Don’t have an account?
                <Link to="/login/registration">Create an account</Link>
            </small>

        </form>
    );

};

LoginForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default LoginForm;
