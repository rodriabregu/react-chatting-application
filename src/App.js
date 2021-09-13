import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Components/ChatFeed.jsx';
import Lobby from './Components/Lobby'
import './App.css'

const App = () => {
    return (
        <div>
        {
        !localStorage.getItem('username') || !localStorage.getItem('password') ?
        <Lobby />
        :
        <ChatEngine 
        height='100vh'
        projectID='86e0352a-1fbe-4612-be20-5175b6a8039d'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
        }
        </div>
    )
}

export default App;