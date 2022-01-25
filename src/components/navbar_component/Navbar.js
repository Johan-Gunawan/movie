import React from 'react';
import {Link} from 'react-router-dom';
import {getToken, deleteToken} from '../../UserToken';
import {getOneUserByToken} from '../../models/User';
import './Navbar.css';

class Navbar extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			showLoginMenu : false
		}

		this.logoutClicked = this.logoutClicked.bind(this);
	}

	componentDidMount(){
		const sessionToken = getToken();
	
		getOneUserByToken(sessionToken).then((res) => {
		
			if(res !== undefined){
				this.setState({
					showLoginMenu : true
				})
			}
		})
		
	}

	logoutClicked(){
		deleteToken();
	}

	render(){
		return (
			<nav className="navbar navbar-expand-sm navbar-light bg-dark">
				<div className="container-fluid px-5">
					<a className="navbar-brand" href="/"><img src="/images/daring.png" alt=""/></a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto ">
						<li className="nav-item mx-2">
							<Link to="/" className="" aria-current="page" href="#">Home</Link>
						</li>
						{ this.state.showLoginMenu ? 
							<>
								<li className="nav-item mx-2">
									<Link to="/favorite" className="" aria-current="page" href="#">Favorites</Link>
								</li>
								<li className="nav-item mx-2">
									<a href="/" className="" aria-current="page" onClick={this.logoutClicked}>Logout</a>
								</li>
								
							</>
							:<>
							<li className="nav-item mx-2">
								<Link to="/login" className="" aria-current="page" href="#">Login</Link>
							</li>
							<li className="nav-item mx-2">
								<Link to="/register" className="" aria-current="page" href="#">Register</Link>
							</li></>
						}
					</ul>
					</div>
				</div>
				</nav>
		);
	}
}

export default Navbar;