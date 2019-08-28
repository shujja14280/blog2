import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./Header/Nav";
import Posts from "./Body/Posts";
import axios from "axios";
import PostDetails from "./Body/PostDetails";
class App extends Component {
  state = {
    post:[],
  }

  componentDidMount() {
    axios.get('/Data').then(res=> this.setState({post:[...res.data]}))
    .catch(e =>{
      console.log("There is some Error", e);
    })
  }
  
  render() {
    console.log(this.state.post)
  let {post} = this.state

    return (
      <div>
        <Nav />
        <Switch>
           {/* <Route exact path="/" component={Posts} /> */}
          {/* <Route path="/post/:id" component={PostDetails} />  */}
          <Route exact path='/' render={(props)=>{
            return <Posts post={post} {...props} />
          }}/>
          <Route exact path = '/posts' render={()=>{
            return <h1>posts</h1>
          }}/>
            <Route path='/post/:id' render={(props)=>{
              return <PostDetails post={this.state.post} {...props} />
          }}/>
        </Switch>
      </div>
    );
  }
}
export default App;
