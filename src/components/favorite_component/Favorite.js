import React from "react";
import ListCard from "../card_component/ListCard";
import { getToken } from "../../UserToken";
import { getOneUserByToken } from "../../models/User";
import {getAllFavoriteMovieByUserId} from '../../models/FavoriteMovie';

class Favorite extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listMovies : []
        }
    }

    componentDidMount(){
        const sessionToken = getToken();
        getOneUserByToken(sessionToken).then(async (userData) => {
            console.log(await getAllFavoriteMovieByUserId(userData.id));
            this.setState({
              listMovies : await getAllFavoriteMovieByUserId(userData.id)
            })
        })
    }

    render(){
        return (
            <div className='favorite-container'>
                <h1>Favorite Movies</h1>
                <hr/>
                <ListCard movies={this.state.listMovies} />
            </div>
        )
    }
}

export default Favorite;