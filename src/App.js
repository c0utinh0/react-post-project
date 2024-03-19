import './App.css';
import { Component } from 'react';
import { Post } from './components/Post/Post';

import {loadPosts} from './utils/loadPosts'
import { Button } from './components/Button/Index';

class App extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 1
  }

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;

    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })  
  }

  loadMorePosts = () => {
    const {page, postsPerPage, allPosts, posts} = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage})

  }    
  
    render(){
    const { posts } = this.state;

    return (
      <section className='container'>
        <Post posts={posts} />
        <Button action={this.loadMorePosts}/>
      </section>      
    );
  }  
}

export default App;
