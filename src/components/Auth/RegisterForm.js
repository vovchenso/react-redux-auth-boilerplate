import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const RegisterForm = ({ error, onSubmit }) => {

    let firstName, lastName, email, password, passwordConfirm;

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                onSubmit(
                    firstName.value,
                    lastName.value,
                    email.value,
                    password.value,
                    passwordConfirm.value
                );
            }}>

            <div className="logo"></div>
            <h3>Create an account</h3>

            { error &&
            <div className="error">{ error }</div>
            }

            <input type="text" placeholder="first name" ref={ node => firstName = node }/>
            <input type="text" placeholder="Last name" ref={ node => lastName = node }/>
            <input type="text" placeholder="E-mail" ref={ node => email = node }/>
            <input type="password" placeholder="Password" ref={ node => password = node }/>
            <input type="password" placeholder="Password confirm" ref={ node => passwordConfirm = node }/>

            <label>
                <input type="checkbox" /> I read and accept <a href="#">terms and conditions</a>
            </label>

            <button className="btn btn-large">create my account</button>

            <small>
                Already have an account?
                <Link to="/login">Log In</Link>
            </small>
        </form>
    );

};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default RegisterForm;
