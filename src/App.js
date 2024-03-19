import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: 'JavaScript',
        body: 'JavaScript is very good'
      },
      {
        id: 2,
        title: 'React',
        body: 'Nice'
      },
      {
        id: 3,
        title: 'React Native',
        body: 'To mobile'
      }
    ]
  }
  
  render(){
    const { posts } = this.state;

    return (
      <div className="App">
        {
          posts.map(post => (
            <div key={post.id}>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))
        }
      </div>
    );
  }
  
}

export default App;
