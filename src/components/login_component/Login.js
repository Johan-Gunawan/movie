import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            valueUsername : '',
            valuePassword : '',
            showErrorUsername : false,
            showErrorPassword : false,
            usernameError : '',
            passwordError : ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            valueUsername : event.target.value
        })
        if(this.state.valueUsername !== ''){
            this.setState({
                showErrorUsername : false,
                usernameError : ''
            })
        }
    }

    handlePasswordChange = (event) => {
        this.setState({
            valuePassword : event.target.value
        })

        if(this.state.valuePassword.length >= 8){
            this.setState({
                showErrorPassword : false,
                passwordError : ''
            })
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.valueUsername === ''){
            this.setState({
                showErrorUsername : true,
                usernameError : 'Username can not be empty!'
            })
        }

        if(this.state.valuePassword.length < 8){
            this.setState({
                showErrorPassword : true,
                passwordError : 'Length of password at least 8 characters'
            })
        }
    }
    

    render(){


        return (
            <div className="login-container container col-md-5 col-12 mt-5 bg-light rounded shadow p-4">
                <h1>Login Form</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" className={`form-control ${this.state.showErrorUsername ? 'is-invalid' : '' }`} id="username" value={this.state.valueUsername} onChange={this.handleUsernameChange} />
                        <div className="invalid-feedback">
							{this.state.usernameError}
						</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" className={`form-control ${this.state.showErrorPassword ? 'is-invalid' : ''}`} id="password" value={this.state.valuePassword} onChange={this.handlePasswordChange} />
                        <div className="invalid-feedback">
							{this.state.passwordError}
						</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
