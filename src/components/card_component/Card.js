import React from "react";
import {IMAGE_URL} from '../../Constant';
import './Card.css';
import { db } from "../../DexieDB";
import {Link} from 'react-router-dom' 

class Card extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            movie : props.movie,
            favorite : false,
            showError : false,
            imageCard :  IMAGE_URL+'/w200/'+this.props.movie.poster_path
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
                <img  src={this.state.imageCard} className="card-img-top card-img" alt="-"/>
                <div className="card-body position-absolute">
                    <div className="info position-absolute p-2">
                        <div className="vote mb-2"><i className="fas fa-star"></i> {this.props.movie.vote_average}</div>
                        <div className="release mb-3"><i class="far fa-calendar-minus"></i> {this.props.movie.release_date}</div>
                        <div className="title">
                            <h5 className="card-title">{this.props.movie.title}</h5>    
                        </div>
                        <div className="detail-link text-center">
                            <Link to={`/detail/${this.props.movie.id}`} className="nav-link active" aria-current="page" href="#">Detail <i class="fas fa-angle-right"></i></Link>
                        </div>
                    </div>
                </div>
                <button className={`favorite-button btn`} onClick={this.handleOnClick}>{this.state.favorite ? <i className="fas fa-heart favorite"></i> : <i className="far fa-heart"></i> } </button>
            </div>
        )
    }
}

export default Card;