import React from "react";
import Card from './Card';
import {GetListMovies} from '../../api/MovieAPI';

class ListCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listMovies : {}
        }
        GetListMovies(1).then((res) =>{
            console.log(res);
            this.setState({
                listMovies : res.results
            })
        })
    }


    render(){
        return(
            <div className="container-card row">
                {this.state.listMovies.map(item => {
                    <Card 
                        movie={item}
                    />
                })}
            </div>
        )
    }
}

export default ListCard;