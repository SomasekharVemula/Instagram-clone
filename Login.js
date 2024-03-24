import React, { Component} from "react";
import Grid from "@material-ui/core/Grid";

class Login extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        hello
                    </Grid>
                    <Grid item xs={6}>
                        <div>
                            <div>
                                
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

}

export default Login;
