import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { recover } from '../actions/AuthActions';
import RecoverForm from '../components/Auth/RecoverForm';
import AuthLinks from '../components/Auth/AuthLinks';

class RecoverPassword extends Component {

    _onSubmit(email) {
        const { recover } = this.props;
        recover({ email });
    }

    render() {
        const { errorMessage } = this.props;

        return (
            <section className="page active" id="recover">
                <div className="form">
                    <RecoverForm
                        onSubmit={ ::this._onSubmit }
                        error={ errorMessage }
                    />
                    <AuthLinks/>
                </div>
            </section>
        );
    }
}

RecoverPassword.propTypes = {
    errorMessage: PropTypes.string,
    recover: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
    return {
        errorMessage: state.errorMessage
    };
};

RecoverPassword = connect(mapStateToProps, {
    recover
})(RecoverPassword);


export default RecoverPassword;
