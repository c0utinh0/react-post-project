import './App.css';
import { Component } from 'react';
import { Post } from './components/Post/Post';

import {loadPosts} from './utils/loadPosts'

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    this.setState({posts: postsAndPhotos})
  
  }
  
  render(){
    const { posts } = this.state;

    return (
      <section className='container'>
        <Post posts={posts} />
      </section>      
    );
  }  
}

export default App;
