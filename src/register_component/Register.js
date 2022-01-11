import React from "react";

class Register extends React.Component{
	constructor(props){
		super(props);
		this.state = {
            valueUsername : '',
            valuePassword : '',
			valueChangePassword : ''
        }
	}


    handleUsernameChange = (event) => {
        this.setState({
            valueUsername : event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            valuePassword : event.target.value
        })
    }

	handleConfirmPasswordChange = (event) => {
		this.setState({
			valueChangePassword : event.target.value
		})
	}

    handleSubmit = (event) => {
        alert(`Username : ${this.state.valueUsername} Password : ${this.state.valuePassword}`);
    }

	render(){
		return (
			<div className="register_container container col-5 mt-5 bg-light rounded shadow p-4">
				<h1>Registration Form</h1>
				<hr />
				<form onSubmit={this.handleSubmit}>
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" className="form-control" id="username" value={this.state.valueUsername} onChange={this.handleUsernameChange} />
						<div className="invalid-feedback">
							{this.usernameError}
						</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" value={this.state.valuePassword} onChange={this.handlePasswordChange} />
						<div className="invalid-feedback">
							{this.passwordError}
						</div>
                    </div>
					<div class="mb-3">
                        <label for="password" class="form-label">Confirm-Password</label>
                        <input type="password" class="form-control" id="password" value={this.state.valuePassword} onChange={this.handlePasswordChange} />
						<div className="invalid-feedback">
							{this.confirmPasswordError}
						</div>
                    </div>
                    <button type="submit" class="btn btn-primary">Register</button>
                </form>
			</div>
		)
	}
}
export default Register;