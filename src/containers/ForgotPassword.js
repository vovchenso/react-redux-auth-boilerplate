import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { forgot } from '../actions/AuthActions';
import ForgotForm from '../components/Auth/LoginForm';
import AuthLinks from '../components/Auth/AuthLinks';

class ForgotPassword extends Component {

    _onSubmit(email) {
        const { forgot } = this.props;
        forgot({ email });
    }

    render() {
        const { errorMessage } = this.props;

        return (
            <section className="page active" id="recover">
                <div className="form">
                    <ForgotForm
                        onSubmit={ ::this._onSubmit }
                        error={ errorMessage }
                    />
                    <AuthLinks/>
                </div>
            </section>
        );
    }
}

ForgotPassword.propTypes = {
    errorMessage: PropTypes.string,
    forgot: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        errorMessage: state.errorMessage
    };
};

ForgotPassword = connect(mapStateToProps, {
    forgot
})(ForgotPassword);


export default ForgotPassword;
