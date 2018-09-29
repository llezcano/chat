import React, { Component } from 'react';
import logo from './logo.svg';
import User from './components/Chat/User'
import Messages from './components/Chat/Messages'
import MessageInput from './components/Chat/MessageInput'
import './App.css';
import io from 'socket.io-client';

class App extends Component {

  state = {
    name: '',
    message: '',
    isReady: false,
    messages: []
  }

  _onNameChange = ({target: {value: name}}) => this.setState({name});
  _onReadyButtonClick = () => {
    this.socket = io('http://localhost:8888');
    this.socket.emit('login', this.state.name);
    this.socket.on('message', (msg) => {
      this.setState(
        (oldState) => ({
          messages: [...oldState.messages, msg]
        })
      );
    });
    this.setState({isReady: true});
  }

  _onMessageChange = ({target: {value: message}}) => this.setState({message});
  _onSendButtonClick = () => {
    this.socket.emit('message', this.state.message);
    this.setState({message: ''})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <User
          name={this.state.name}
          isReady={this.state.isReady}
          handleNameChange={this._onNameChange}
          handleReadyButtonClick={this._onReadyButtonClick}
        />
        <Messages
          messages={this.state.messages}
        />
        <MessageInput
          message={this.state.message}
          handleMessageChange={this._onMessageChange}
          isReady={this.state.isReady}
          handleSendButtonClick={this._onSendButtonClick}
        />
      </div>
    );
  }
}

export default App;
