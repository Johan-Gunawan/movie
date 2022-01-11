import React from "react";

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            valueUsername : '',
            valuePassword : ''
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

    handleSubmit = (event) => {
        if(this.state.valueUsername == ''){

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
                        <input type="text" className="form-control" id="username" value={this.state.valueUsername} onChange={this.handleUsernameChange} />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" value={this.state.valuePassword} onChange={this.handlePasswordChange} />
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        );
    }
}

export default Login;
