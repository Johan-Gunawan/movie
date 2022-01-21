import React from "react";
import { IMAGE_URL } from "../../Constant";
import {GetDetailMovie} from "../../api/MovieAPI";
import './Detail.css'




class Detail extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            title : '',
            genres : [],
            release : '',
            companies : [],
            countries : [],
            vote: 0,
            popularity : 0,
            overview : '',
            hour : 0,
            minute : 0,
            poster: ''
        }
    }

    componentDidMount(){
        const pathname = window.location.pathname.split('/')
        const id = pathname[pathname.length-1];  
        
        GetDetailMovie(id).then((res) => {
            console.log(res);
            this.setState({
                title : res.data.title,
                genres : res.data.genres,
                release_year : res.data.release_date.split('-')[0],
                companies : res.data.production_companies,
                countries : res.data.production_countries,
                vote: res.data.vote_average,
                popularity : res.data.popularity,
                overview : res.data.overview,
                hour : parseInt(res.data.runtime/60),
                minute : res.data.runtime%60,
                poster : res.data.belongs_to_collection.poster_path
            })
        })
    }

    

    render(){
        return(
            <div className="detail-container shadow container mx-auto row p-3 my-3">
                <div className="poster-movie col-12 col-md-5">
                    <img src={IMAGE_URL+'w500'+this.state.poster}  className="w-100"/>
                </div>
                <div className="info-movie col-12 col-md-6">
                    <h1 className="title">{this.state.title}</h1>
                    <div className="general-info">
                        {this.state.genres.map((genre,index) => {
                            return <small key={genre.id}>{genre.name} {index !== this.state.genres.length-1 ? ' / ' : ''}</small>
                        })}
                        <small className="break">| </small>
                        <small>{this.state.hour}h {this.state.minute}m</small>
                        <small className="break"> | </small>
                        <small>{this.state.release_year}</small>
                    </div>
                    
                    <p className="rating">
                        <i className="fas fa-star"></i> {this.state.vote}
                    </p>

                    <div className="overview">
                        <h4>Overview</h4>
                        {this.state.overview}
                    </div>
                    <div className="companies row g-0 mt-3">
                        <h4>Production Companies</h4>
                        {this.state.companies.map(company => {
                            return <div key={company.id} className="company col-5 col-md-3 m-1 d-flex align-items-center">
                                        <div className="image">
                                            <img src={IMAGE_URL+'w200'+company.logo_path} alt={company.logo_path} style={company.id == 34 ? {width:70} : {}}/>
                                        </div>
                                    </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;
