import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import UIfx from "uifx"
import axios from "axios"

const tick = new UIfx(
  {asset: "/assets/data/juntos.mp3"}
)

const sendMessage = (message) => {
  addResponseMessage(message);
  try{
    let audio = new Audio("/assets/data/juntos.mp3")
    audio.play()
  }
  catch(e){
    console.log("Please allow audio for a better experience.")
  }
}


class ChatBot extends Component {
  componentDidMount() {
    sendMessage("Welcome my friend!")
  }

  handleNewUserMessage = (newMessage) => {
    axios.post("http://chat-bot-bg-unified.herokuapp.com/api/chat_bot/predictResponse/",{
      message: newMessage
    },{
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(res => {
      sendMessage("Success!")
    }).catch(err => {
      console.error(err)
    })
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
