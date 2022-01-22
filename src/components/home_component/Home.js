import React from 'react'
import ListCard from '../card_component/ListCard';
import { GetListMovies } from '../../api/MovieAPI';
import './Home.css';


class Home extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            listMovies : []
        }
    }

    componentDidMount(){
        GetListMovies(this.state.page).then(res => {
            console.log(res.data.results);
            this.setState({
                listMovies : res.data.results
            })
        })
    }


    render(){
        return(
            <div className='home-container p-3'>
                <h1>Now Playing Movie</h1>
                <hr/>
                <ListCard movies={this.state.listMovies} />
            </div>
        )
    }
}

export default Home;