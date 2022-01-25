import React from "react";
import {IMAGE_URL} from '../../Constant';
import './Card.css';
import {Link} from 'react-router-dom' 
import {getOneFavoriteMovie, addOneFavoriteMovie, deleteOneFavoriteMovie} from '../../models/FavoriteMovie';
import { getOneUserByToken } from "../../models/User";
import {getToken} from '../../UserToken';

class Card extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            id : -1,
            movie : props.movie,
            imageCard :  IMAGE_URL+'/w200/'+this.props.movie.poster_path,
            favorite : false,
            showError : false,
            showFavoriteButton : false && !props.favoritePage,
            showDeleteButton : props.favoritePage
        }
    }

    componentDidMount(){
        const sessionToken = getToken();
        getOneUserByToken(sessionToken).then((userData) => {
            if(userData !== undefined){
                let movieId = this.props.movie.id;
                if(this.props.movie.movie_id !== undefined){
                    movieId = this.props.movie.movie_id
                }

                getOneFavoriteMovie(movieId,userData.id).then((res) => {
                    if(res !== undefined){
                        this.setState({
                            favorite : true
                        })
                    }
                })
            }
            else{
                this.setState({
                    showFavoriteButton : false
                })
            }
        })
    }

    handleOnClick = async (event) => {
        try{
            const sessionToken = getToken();
            const userData = await getOneUserByToken(sessionToken);

            let movieId = this.props.movie.id;
            if(this.props.movie.movie_id !== undefined){
                movieId = this.props.movie.movie_id
            }

            const favoriteData = await getOneFavoriteMovie(movieId,userData.id);
            if(favoriteData === undefined){
                const id = await addOneFavoriteMovie(this.props.movie,userData.id);
                if(id > 0){
                    this.setState({
                        favorite : true
                    })
                }
            }
            else{
                const result = await deleteOneFavoriteMovie(this.props.movie.id,userData.id);
                this.setState({
                    favorite : false
                })
            }
        }
        catch(err){
            console.log(err);
            alert(err.message);
        }
    }

    handleOnDelete = async () =>{
        const movieId = this.props.movie.movie_id;

        const sessionToken = getToken();
        const userData = await getOneUserByToken(sessionToken);
        this.props.deleteMovieListener(movieId,userData.id)
    }


    render(){
        return(
            <div className="card p-0 m-1 m-md-2 position-relative">
                <img  src={this.state.imageCard} className="card-img-top card-img" alt="-"/>
                <div className="card-body position-absolute">
                    <div className="info position-absolute p-2">
                        <div className="vote mb-2"><i className="fas fa-star"></i> {this.props.movie.vote_average}</div>
                        <div className="release mb-3"><i className="far fa-calendar-minus"></i> {this.props.movie.release_date}</div>
                        <div className="title">
                            <h5 className="card-title">{this.props.movie.title}</h5>    
                        </div>
                        <div className="detail-link text-center">
                            <Link to={`/detail/${this.props.movie.movie_id !== undefined ? this.props.movie.movie_id : this.props.movie.id}`} className="nav-link active" aria-current="page" href="#">Detail <i className="fas fa-angle-right"></i></Link>
                        </div>
                    </div>
                    {this.state.showDeleteButton && <button className={`delete-button btn`} onClick={this.handleOnDelete}><i className="far fa-trash-alt"></i></button>}
                </div>
                {this.state.showFavoriteButton && <button className={`favorite-button btn`} onClick={this.handleOnClick}>{this.state.favorite ? <i className="fas fa-heart favorite"></i> : <i className="far fa-heart"></i> } </button>}
            </div>
        )
    }
}

export default Card;