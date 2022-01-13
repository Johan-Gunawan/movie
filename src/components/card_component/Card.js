import React from "react";

class Card extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            movie : props.movie
        }
    }

    handleOnClick = (event) => {
        console.log(this.state.movie);
    }


    render(){
        return(
            <div className="card" style="width: 18rem;">
                <img  src={process.env.REACT_APP_IMAGE_URL+this.props.movie.poster_path} className="card-img-top" alt={process.env.REACT_APP_IMAGE_URL+this.props.movie.poster_path}/>
                <div className="vote">{this.props.movie.vote_average}</div>
                <div className="popularity">{this.props.movie.vote_average}</div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.movie.title}</h5>    
                </div>
                <button className="card-detail btn btn-secondary" onClick={this.handleOnClick}>Detail</button>
            </div>
        )
    }
}

export default Card;