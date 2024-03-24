import { Component } from "react";
import './home.css';
import NavBar from "../NavBar/NavBar";
import MainContent from "../MainContent/MainContent.js";

class Home extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
            <div>
                <NavBar/>
                <MainContent/>
            </div>
        )
    }
}

export default Home;