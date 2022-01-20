import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import {Navigate} from 'react-router-dom';
import { db } from "../../DexieDB";
import { comparePassword } from '../../utils/Encryption';
import { generateToken } from '../../utils/Functions';

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            valueUsername : '',
            valuePassword : '',
            showErrorUsername : false,
            showErrorPassword : false,
            usernameError : '',
            passwordError : '',
            redirectToHome : false
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

    handleSubmit = async (event) => {
        event.preventDefault();
        let success = true;
        if(this.state.valueUsername === ''){
            this.setState({
                showErrorUsername : true,
                usernameError : 'Username can not be empty!'
            });
            success = false;
        }

        if(this.state.valuePassword.length < 8){
            this.setState({
                showErrorPassword : true,
                passwordError : 'Length of password at least 8 characters'
            })

            success = false;
        }

        if(success){
            const user = await db.users.where('username').equals(this.state.valueUsername).first();
            console.log(user);
            if(user == undefined){
                this.setState({
                    showErrorUsername : true,
                    usernameError : 'Username not found',
                    valuePassword : ''
                });
            }
            else{
                if(comparePassword(this.state.valuePassword,user.password)){
                    const result = await db.users.update(user.id,{token : generateToken()});
                    
                    this.setState({
                        redirectToHome : true
                    });
                }
                else{
                    this.setState({
                        showErrorPassword : true,
                        passwordError : 'Wrong password!'
                    })
                    
                }
                
            }
        }
    }
    

    render(){
        if(this.state.redirectToHome){
            return (
                <Navigate to="/" />
            )
        }

        return (
            <div className="login-container container col-md-5 col-12 mt-5 bg-light rounded shadow p-4">
                <h1>Login Form</h1>
                <hr />
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" className={`form-control ${this.state.showErrorUsername ? 'is-invalid' : '' }`} id="username" value={this.state.valueUsername} onChange={this.handleUsernameChange} />
                        <div className="invalid-feedback">
							{this.state.usernameError}
						</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className={`form-control ${this.state.showErrorPassword ? 'is-invalid' : ''}`} id="password" value={this.state.valuePassword} onChange={this.handlePasswordChange} />
                        <div className="invalid-feedback">
							{this.state.passwordError}
						</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
