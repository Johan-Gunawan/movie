import React from "react";
import './Sidebar.css';
class Sidebar extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            showSidebar : false
        }
    }

    wrapperOnClick = () =>{
        this.setState({
            showSidebar : !this.state.showSidebar
        })
    }


    render(){
        return(
            <div className={`sidebar_container bg-dark col-3 ${this.state.showSidebar ? 'show' : 'hide'}`}>
                <button className="wrapper btn rounded-circle shadow" onClick={this.wrapperOnClick}> <i className={`fas fa-chevron-left ${this.state.showSidebar ? '' : 'transform-180'}`}></i></button>
                    <ul className="list-unstyled ps-0">
                        <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded text-bold collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
                        <i class="fas fa-angle-right"></i> Home
                        </button>
                        <div className="collapse" id="home-collapse">
                        <ul className="btn-toggle-nav ms-2 list-unstyled fw-normal pb-1">
                            <li className="p-1"><a href="/" className="link-dark rounded">Overview</a></li>
                            <li className="p-1"><a href="/" className="link-dark rounded">Updates</a></li>
                            <li className="p-1"><a href="/" className="link-dark rounded">Reports</a></li>
                        </ul>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;