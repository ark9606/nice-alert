import React, { Component } from 'react';
import './App.scss';
import str from './strings';

class NiceAlert extends Component {
  render() {
    return (
      <div className='nice-alert'>
        <div className='nice-alert-inner'>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}



class App extends Component {
  constructor(props) {
    super(props);


    const url = new URL(window.location.href);
    const id = url.searchParams.get('id');
    const msg = url.searchParams.get('msg');

    let text = '';
    if(str[id]) {
      text = str[id];
    }
    else if(msg) {
      text = msg;
    }

    this.state = {
      text,
    }
  }

  componentDidMount() {

    // this.setState({text});
  }

  render() {
    return (
      <div className="App">

        <NiceAlert text={this.state.text}/>

      </div>
    );
  }
}

export default App;
