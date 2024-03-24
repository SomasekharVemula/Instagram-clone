import React, { Component } from 'react';
import "./Post.css";
import { Avatar } from '@material-ui/core';
import post from '../MainContent/post.jpg';
import love from '../MainContent/love.svg';
import comment from '../MainContent/comment.svg';
import share from '../MainContent/share.svg';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            commentList:[]
         }
    }

    componentDidMount(){
        this.getComments();
    }

    getComments=()=>{ 
        let data=[
            {
                "username": "Anubhav",
                "commentId":"1234",
                "timeStamp":"123456",
                "comment":"1",
                
            },
            {
                "username": "anuragini",
                "commentId":"1234",
                "timeStamp":"123456"
                
            },
            {
                "username": "anirudh",
                "commentId":"1234",
                "timeStamp":"123456"
                
            }
        ];
                this.setState({commentList: data});
    }
  
    render() { 
        return ( 
        <div className="post__container">
            {/* Header */}
          <div className="post__header">
                <Avatar className="post__image" src="" />
                <div className="post__username">{this.props.userName}</div>
          </div>

          {/* Image */}
          <div>
              <img src={post} width="500px" /> 
          </div>

          {/* Analytics */}
          <div>
              <div style={{"marginLeft":"10px"}}>
                  <img src={love} className="post_reactimage"/>
                  <img src={comment} className="post_reactimage"/>
                  <img src={share} className="post_reactimage"/>
              </div>
              <div style={{ "fontWeight":"bold","marginLeft":"20px  "}}>
                  {this.props.likes} likes     
              </div>
          </div>

          {/* Comment Section */}
          <div>
              {
                  this.state.commentList.map((item,index)=>(
                        <div className="post_comment">{item.userName}: {item.description}</div>
                  ))
              }
              <input text="text" className="post__commentbox" placeholder="Add a comment..." />
          </div>
          
        </div> 
        );
    }
}
 
export default Post;