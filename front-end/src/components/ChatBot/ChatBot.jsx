import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';


class ChatBot extends Component {
  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    let audio = new Audio("/assets/data/juntos.mp3")
    audio.play()
    // Now send the message throught the backend API
    addResponseMessage("Testing!");
  }

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
        />
      </div>
    );
  } 
}

export default ChatBot;
