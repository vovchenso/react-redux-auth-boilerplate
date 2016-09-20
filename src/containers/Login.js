import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/AuthActions';
import LoginForm from '../components/Auth/LoginForm';
import AuthLinks from '../components/Auth/AuthLinks';


class Login extends Component {

    _onSubmit(email, password) {
        const { login } = this.props;
        login({ email, password });
    }

    render() {
        const { errorMessage } = this.props;

        return (
            <section className="page active" id="login">
                <div className="form">
                    <LoginForm
                        onSubmit={ ::this._onSubmit }
                        error={ errorMessage }
                    />
                    <AuthLinks/>
                </div>
            </section>
        );
    }
}

Login.propTypes = {
    errorMessage: PropTypes.string,
    login: PropTypes.func.isRequired,
};

const mapStateToProps = state => {

    const { auth } = state;

    return {
        errorMessage: auth.errorMessage
    };
};

Login = connect(mapStateToProps, {
    login
})(Login);


export default Login;
