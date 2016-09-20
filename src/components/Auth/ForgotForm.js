import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ForgotForm = ({ error, onSubmit }) => {

    let email;

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                onSubmit(email.value);
            }}>

            <div className="logo"></div>
            <h3>Recover your password</h3>

            { error &&
            <div className="error">{ error }</div>
            }

            <input type="text" placeholder="E-mail" ref={ node => email = node }/>

            <button className="btn btn-large">send message</button>

            <small>
                <Link to="/login">Go back to login</Link>
            </small>
        </form>
    );

};

ForgotForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default ForgotForm;
