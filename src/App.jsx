import React from 'react';
import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'

const App = () => {
  return (
    <ChatEngine
      height="100vh"
      projectID="742e0410-898e-41cc-a454-eb28a201adf0"
      userName="Andy Vo"
      userSecret="Andy123456789"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  )
}

export default App
