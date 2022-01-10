import {BrowserRouter,Routes, Route} from 'react-router-dom';

import Navbar from './navbar_component/Navbar';
import Login from './login_component/Login';
import Register from './register_component/Register';


function App() {
	return (
		<BrowserRouter>
			<div className="App">
			<Navbar />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
