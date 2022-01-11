import React from "react";
import Constant from "../Constant";

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
            valueUsername : '',
            valuePassword : '',
			valueConfirmPassword : '',
			usernameError : '',
			passwordError : '',
			confirmPasswordError : '',
			showErrorUsername : false,
			showErrorPassword : false,
			showErrorConfirmPassword : false
        }
	}


    handleUsernameChange = (event) => {
        this.setState({
            valueUsername : event.target.value
        });

		if(this.state.valueUsername !== ''){
			this.setState({
				showErrorUsername : false,
				usernameError : 'Username can\'t be empty!'
			});
		}
    }

    handlePasswordChange = (event) => {
        this.setState({
            valuePassword : event.target.value
        })

		if(this.state.valuePassword.length >= Constant.MIN_LENGTH_PASSWORD){
			this.setState({
				showErrorPassword : false,
				usernameError : ''
			});
		}
    }

	handleConfirmPasswordChange = (event) => {
		this.setState({
			valueConfirmPassword : event.target.value
		})

		if(this.state.valuePassword === this.state.valueConfirmPassword){
			this.setState({
				showErrorConfirmPassword : false,
				usernameError : ''
			});
		}
	}

    handleSubmit = (event) => {
		event.preventDefault();
        if(this.state.valueUsername === ''){
			this.setState({
				showErrorUsername : true,
				usernameError : 'Username can not be empty!'
			});
		}

		if(this.state.valuePassword.length < 8){
			this.setState({
				showErrorPassword : true,
				passwordError : 'Length of password at least 8 characters'
			});
		}

		if(this.state.valuePassword !== this.state.valueConfirmPassword){
			this.setState({
				showErrorConfirmPassword : true,
				confirmPasswordError : 'Password and confirm password must same'
			});
			
		}
		
    }

	render(){
		
		return (
			<div className="register_container container col-5 mt-5 bg-light rounded shadow p-4">
				<h1>Registration Form</h1>
				<hr />
				<form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label for="username" className="form-label">Username</label>
                        <input type="text" className={`form-control ${this.state.showErrorUsername ? 'is-invalid' : ''}`} id="username" value={this.state.valueUsername} onChange={this.handleUsernameChange} />
						<div className="invalid-feedback">
							{this.state.usernameError}
						</div>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className={`form-control ${this.state.showErrorPassword ? 'is-invalid' : ''}`} id="password" value={this.state.valuePassword} onChange={this.handlePasswordChange} />
						<div className="invalid-feedback">
							{this.state.passwordError}
						</div>
                    </div>
					<div className="mb-3">
                        <label for="password" className="form-label">Confirm Password</label>
                        <input type="password" className={`form-control ${this.state.showErrorConfirmPassword ? 'is-invalid' : '' }`} id="password" value={this.state.valueConfirmPassword} onChange={this.handleConfirmPasswordChange} />
						<div className="invalid-feedback">
							{this.state.confirmPasswordError}
						</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
			</div>
		)
	}
}
export default Register;