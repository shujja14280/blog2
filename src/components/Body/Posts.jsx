import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
class Posts extends Component {

  // state={
  //   text:""
  // }

  // handelchange=(e)=>{
  //   this.setState({
  //     [e.target.name]:e.target.value
  //   })
  // }

  // handelSubmit=()=>{
  //   axios.post("/shujja",{
  //     name:this.state.text
  //   })
  // }





  render() {
    console.log(this.state);
    const post = this.props.post;
    let response = post.map((post, index) => {
      return (
        <div key={post.id} className="container">
     <br/><br/><br/><br/><br/><br/><br/>
     {/* <form onSubmit={this.handelchange}>
      <input type="text" placeholder="Name" name="text" onChange={(e)=>{this.handelchange(e)}} />
          <button type="submit">Submit</button>
      
      </form>
     */}

        <div  className="main">
       
          <img src={`${post.post.img}`} alt=" post image" />
          <Link className="link_set" to={`/post/${post.id}`}>
            <h1>{post.post.title}</h1>
          </Link>
          <h3>{post.post.desc}</h3>
          <p>{post.author.img}</p>
          <p className="span1">{post.author.username}</p>
          {/* <p className="span2">{post.createdAt}</p> 
           <p> Likes {post.post.likes}</p> 
           <p>COmmentes {post.post.comments.length}</p> 
          <p>share</p> */}
        </div>
      
        </div>
      );
    });
    return <div>{response}
      
    </div>;
  }
}

    
    
export default Posts;
 

