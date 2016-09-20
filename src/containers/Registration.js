import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../actions/AuthActions';
import RegisterForm from '../components/Auth/RegisterForm';
import AuthLinks from '../components/Auth/AuthLinks';

class Registration extends Component {

    _onSubmit(firstName, lastName, email, password, passwordConfirm) {
        const { register } = this.props;
        register({ firstName, lastName, email, password, passwordConfirm });
    }

    render() {
        const { errorMessage } = this.props;

        return (
            <section className="page active" id="registration">
                <div className="form">
                    <RegisterForm
                        onSubmit={ ::this._onSubmit }
                        error={ errorMessage }
                    />
                    <AuthLinks/>
                </div>
            </section>
        );
    }
}

Registration.propTypes = {
    errorMessage: PropTypes.string,
    register: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        errorMessage: state.errorMessage
    };
};

Registration = connect(mapStateToProps, {
    register
})(Registration);


export default Registration;
