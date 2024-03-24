import { Component } from "react";
import './NavBar.css';
import { Avatar, Grid } from "@material-ui/core";
import insta_logo from '../MainContent/insta_logo.jpg';
import home from '../MainContent/home.svg';
import find from '../MainContent/find.svg';
import message from '../MainContent/message.svg';
import love from '../MainContent/love.svg';
import {avatar} from "@material-ui/core";
import dp6 from '../MainContent/dp6.png';

class NavBar extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
            <div> 
                <div className="navbar__barContent">
                    <Grid container>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={3}>
                            <img className="navbar_logo" src={insta_logo} width="105px" />
                        </Grid>

                        <Grid item xs={3}>
                            <input text="text" className="navbar__searchBar" placeholder="search" />
                        </Grid>
                        <Grid item xs={3} style={{"display":"flex"}}>
                            <img src={home} className="navbar_image" width="25px"/>
                            <img src={message}  className="navbar_image" width="25px"/>
                            <img src={find}  className="navbar_image" width="25px"/>
                            <img src={love}  className="navbar_image" width="25px"/>
                            <Avatar src={dp6} className="navbar_image" style={{"maxHeight":"25px", "maxWidth":"35px"}}/>
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default NavBar;