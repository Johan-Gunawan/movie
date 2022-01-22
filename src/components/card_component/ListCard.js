import React from "react";
import { deleteOneFavoriteMovie } from "../../models/FavoriteMovie";
import Card from './Card';

class ListCard extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            listMovies : []
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (this.props !== prevProps) {
            this.setState({
                listMovies : this.props.movies
            })
        }
        
    }

    deleteFavoriteMovie = async (movieId,userId) => {
        await deleteOneFavoriteMovie(movieId,userId)
        this.props.favoriteMovieListener();
    }


    render(){
        return(
            <div className="container-card row flex-wrap justify-content-start">
                {this.state.listMovies.map(item => 
                    <Card key={item.id} movie={item} deleteMovieListener={this.deleteFavoriteMovie} favoritePage={this.props.favoritePage}/>
                )}
            </div>
        )
    }
}

export default ListCard;