import React from "react";
import ListCard from "../card_component/ListCard";
import { getToken } from "../../UserToken";
import { getOneUserByToken } from "../../models/User";
import {getAllFavoriteMovieByUserId} from '../../models/FavoriteMovie';

class Favorite extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listMovies : [],
            showMovie : false
        }
    }

    componentDidMount(){
        const sessionToken = getToken();
        getOneUserByToken(sessionToken).then(async (userData) => {
            this.setState({
              listMovies : await getAllFavoriteMovieByUserId(userData.id),
              showMovie : true
            })
        })
    }

    getFavoriteMovieListener = () =>{
        const sessionToken = getToken();
        getOneUserByToken(sessionToken).then(async (userData) => {
            this.setState({
              listMovies : await getAllFavoriteMovieByUserId(userData.id),
              showMovie : true
            })
        })
    }

    render(){
        return (
            <div className='favorite-container p-3'>
                <h1>Favorite Movies</h1>
                <hr/>
                <ListCard movies={this.state.listMovies} favoriteMovieListener={this.getFavoriteMovieListener} favoritePage={true} />
            </div>
        )
    }
}

export default Favorite;