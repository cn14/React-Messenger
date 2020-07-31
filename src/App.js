import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import {FormControl, Input} from '@material-ui/core'
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';
function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUserName] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc =>({id:doc.id, message:doc.data()})))
    })
  }, [])

  useEffect(() => {
    setUserName(prompt('Who are u?'));
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
    <img src="https://img.icons8.com/color/96/000000/facebook-messenger.png" alt = 'fb'/>
     <h1>Hello {username}!</h1>
     <div className = 'messages'>
     <FlipMove>
     {
      messages.map(({id, message}) => (
        <Message key = {id} username = {username} message = {message}/>
      ))
    }
     </FlipMove>
     </div>
     <form className = 'app_form' >
      <FormControl className = 'input_form'>
        <Input  type="text" placeholder = 'Enter Message...' value ={input} onChange = {(e) => setInput(e.target.value)}/>
      </FormControl>
      <IconButton disabled = {!input} variant="contained" color="primary" type = 'submit' onClick = {sendMessage}>
        <SendIcon/>
      </IconButton>
     </form>
     
    </div>
  );
}

export default App;
