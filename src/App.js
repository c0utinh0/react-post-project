import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0
  }

  handlerImgClick = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 })
  }
  
  render(){
    const { counter } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <img  src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlerImgClick}>### Clique Aqui ###</p>
          <p> 
            {counter}
          </p>
          <p >
            Edit <code>src/App.js</code> and save to reload. 
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
