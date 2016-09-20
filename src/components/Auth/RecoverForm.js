import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const RecoverForm = ({ error, onSubmit }) => {

    let password, passwordConfirm;

    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                onSubmit(
                    password.value,
                    passwordConfirm.value
                );
            }}>

            <div className="logo"/>
            <h3>Recover your password</h3>

            { error &&
            <div className="error">{ error }</div>
            }

            <input type="password" placeholder="Password" ref={ node => password = node }/>
            <input type="password" placeholder="Password confirm" ref={ node => passwordConfirm = node }/>

            <button className="btn btn-large">change password</button>

            <small>
                <Link to="/login">Log In</Link>
            </small>
        </form>
    );

};

RecoverForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
};

export default RecoverForm;
