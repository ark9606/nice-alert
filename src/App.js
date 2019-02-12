import React, { Component } from 'react';
import './App.scss';
import str from './strings';

class NiceAlert extends Component {
  constructor(props){
    super(props);
    this.state = {
      isOpen: true,
      toClosing: false
    };
    this.onNice = this.onNice.bind(this);
  }

  onNice(e) {
    this.setState({toClosing: true}, () => {
      setTimeout(() => {

        this.setState({isOpen: false, toClosing: false});
      }, 1000);

    });
  }

  render() {
    const {isOpen, toClosing} = this.state;

    let niceAlert = (
      <div className={`nice-alert ${toClosing ? 'closing': ''}`}>
        <div className='nice-alert-inner'>
          <div className='nice-alert-content'>
            <p dangerouslySetInnerHTML={{__html: this.props.text}}/>
          </div>
          <div className="nice-alert-button" onClick={this.onNice}>nice!</div>
        </div>
      </div>
    );

    return (isOpen ? niceAlert : null);
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
