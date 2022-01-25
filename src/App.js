import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar_component/Navbar';
import Login from './components/login_component/Login';
import Register from './components/register_component/Register';
import Detail from './components/detail_component/Detail';
import Home from './components/home_component/Home';
import Favorite from './components/favorite_component/Favorite';
import Sidebar from './components/sidebar_component/Sidebar';


function App() {
	return (
		<div className="App d-flex">
			<BrowserRouter>
				{/* <Navbar /> */}
				<Sidebar />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/detail/:id" element={<Detail />} />
					<Route path="/favorite" element={<Favorite />} />
				</Routes>
				</BrowserRouter>
			
		</div>
	);
}

export default App;
