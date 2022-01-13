require('dotenv').config()
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar_component/Navbar';
import Login from './components/login_component/Login';
import Register from './components/register_component/Register';
import ListCard from './components/card_component/ListCard';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
				<ListCard />
			</div>
		</BrowserRouter>
	);
}

export default App;
