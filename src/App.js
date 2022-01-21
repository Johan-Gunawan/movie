import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar_component/Navbar';
import Login from './components/login_component/Login';
import Register from './components/register_component/Register';
import Detail from './components/detail_component/Detail';
import Home from './components/home_component/Home';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/detail/:id" element={<Detail />} />
				</Routes>
				</BrowserRouter>
			
		</div>
	);
}

export default App;
