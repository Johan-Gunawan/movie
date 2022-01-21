import React from "react";
import Card from './Card';

class ListCard extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="container-card row flex-wrap justify-content-around">
                {this.props.movies.map(item => 
                    <Card key={item.id} movie={item}/>
                )}
            </div>
        )
    }
}

export default ListCard;