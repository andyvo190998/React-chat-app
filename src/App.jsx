import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'
import LoginForm from './components/LoginForm';

const App = () => {
  if (!localStorage.getItem('userName')) return <LoginForm />

  return (
      <ChatEngine
        height="100vh"
        projectID="742e0410-898e-41cc-a454-eb28a201adf0"
        userName={localStorage.getItem('userName')}
        userSecret={localStorage.getItem('passWord')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
  )
}

export default App
