import React from "react";
import { IMAGE_URL } from "../../Constant";
import {GetDetailMovie} from "../../api/MovieAPI";
import {matchPath, useParams} from 'react-router-dom'




class Detail extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            // imageBackdrop : IMAGE_URL+'w500'+props.movie.backdrop_path
        }
    }

    componentDidMount(){
        const pathname = window.location.pathname.split('/')
        const id = pathname[pathname.length-1];  
        
        GetDetailMovie(id).then((res) => {
            console.log(res);
        })
    }

    

    render(){
        return(
            <div className="detail-container">
                <div className="image-movie">
                    {/* <img src={this.state.imageBackdrop} alt={this.state.imageBackdrop} />     */}
                </div>
                {/* <div className="info-movie">
                    <h3 className="title">{this.props.movie.title}</h3>
                    <h5 className="vote">{this.props.movie.vote_average}</h5>
                    <h5 className="populatiry">{this.props.movie.popularity}</h5>
                    <h5 className="release">{this.props.movie.popularity}</h5>
                    <hr />
                    <div className="description">
                        <p>
                            {this.props.movie.overview}  
                        </p>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default Detail;
