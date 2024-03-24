import { Component } from "react";
import './MainContent.css';
import Grid from "@material-ui/core/Grid";
import StatusBar from "../StatusBar/Statusbar";
import MainPage from "../MainPage/MainPage";

class MainContent extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
            <div>
                <div>
                    <Grid container>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={6} className="maincontent__container">
                            <StatusBar/>
                            <MainPage/>
                        </Grid>

                        <Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                        <Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default MainContent;