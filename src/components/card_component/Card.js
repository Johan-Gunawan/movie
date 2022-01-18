import React from "react";
import {IMAGE_URL} from '../../Constant';
import './Card.css';
import IndexedDB from "../../IndexedDB";

class Card extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            movie : props.movie,
            showError : false
        }
    }

    handleOnClick = (event) => {
        const db = new IndexedDB();
        db.init();
        const res = db.addFavoriteMovie(this.state.movie);
        if(!res){
            alert("Data favorit yang anda masukkan tidak valid!");
        }
    }


    render(){
        return(
            <div className="card col-2 p-0 m-3 position-relative">
                <img  src={IMAGE_URL+'/w200/'+this.props.movie.poster_path} className="card-img-top card-img" alt="-"/>
                <div className="card-body position-absolute">
                    <div className="vote">{this.props.movie.vote_average}</div>
                    <div className="popularity">{this.props.movie.vote_average}</div>
                    <div className="title">
                        <h5 className="card-title">{this.props.movie.title}</h5>    
                    </div>
                    <button className="favorite-button btn btn-secondary" onClick={this.handleOnClick}><i className="fas fa-plus"></i></button>
                </div>
            </div>
        )
    }
}

export default Card;