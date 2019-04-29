import React, { Component } from 'react';
import loginActions from '../../actions/signin.actions';
import signupActions  from '../../actions/signup.actions';
import LoginForm from '../../components/LoginForm';
import SignupForm from "../../components/SignupForm";
import '../../assets/styles/login.scss';
import '../../assets/styles/util.scss';
import { connect } from 'react-redux';


class Auth extends Component {

    constructor(props){
        super(props)
        this.state = {
            passError: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = e => {
        if (!e.target.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        const values = [];
        for (let name of data.keys()) {
            const input = form.elements[name];
            values.push(input.value);
        }
        if (values[2] !== values[3]) {
            this.setState({
                passError: "Passwords do not match"
            });
        } else {
            this.setState({
                passwordError: ' '
            });
            this.props.authenticate(data)
        }
    }

    render(){
        const { props } = this;
        const error = 
            props.loginReducer.error ? props.loginReducer.error.response ?  props.loginReducer.error.response.data : '' : ''
        return (
            <div className="login-body">
                <div className="limiter">
                <div className="container-login100">
                <div className="login100-more"></div>
                <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
                <form className="login100-form validate-form"  onSubmit={this.handleSubmit}>
                <span className="login100-form-title p-b-59">Twitter-Lite</span>
                { props.location.pathname === '/' ? <LoginForm error={error.message} /> : <SignupForm error={error.message} passError={this.state.passError} />}
                </form>
                </div>
                </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loginReducer: state.loginReducer,
    signupReducer: state.signupReducer
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        authenticate: data => 
            props.location.pathname === '/' ?
                dispatch(loginActions.login(data, props.history)) : 
                    dispatch(signupActions.signup(data, props.history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
