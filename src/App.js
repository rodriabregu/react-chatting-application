import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed.jsx';
import LoginForm from './Components/LoginForm'
import './App.css'

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine 
        height='100vh'
        projectID='86e0352a-1fbe-4612-be20-5175b6a8039d'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;