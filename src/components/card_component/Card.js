import React from "react";
import {IMAGE_URL} from '../../Constant';
import './Card.css';
import { db } from "../../DexieDB";

class Card extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            movie : props.movie,
            favorite : false,
            showError : false
        }
    }

    handleOnClick = async (event) => {
        try{
            db.open();
            const id = await db.favorite_movies.add({
                id : this.props.movie.id,
                title : this.props.movie.title,
                description : this.props.movie.overview,
                vote : this.props.movie.vote_average,
                poster : this.props.movie.poster_path,
                release_date : this.props.movie.release_date
            });
            db.close();
            this.setState({
                favorite : true
            })

        }
        catch(err){
            alert("Gagal menambahkan data, Periksa kembali data yang anda tambahkan!");
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
                    <button className={`favorite-button btn btn-secondary ${this.state.favorite ? 'favorite' : ''}`} onClick={this.handleOnClick}><i className="fas fa-plus"></i></button>
                </div>
            </div>
        )
    }
}

export default Card;