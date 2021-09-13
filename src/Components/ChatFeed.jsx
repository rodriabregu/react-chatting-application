import MyMessage from "./MyMessage";
import MessageForm from "./MessageForm";
import TheirMessage from "./TheirMessage";
import '../App.css';

const ChatFeed = (props) => {
/*     if (!localStorage.getItem('username')) {
        return <Lobby />
    } */
    const { chats, activeChat, userName, messages } = props;
    const chat = chats && chats[activeChat];

    const renderReadReceipts = (message, isMyMessage) => {
        return chat.people.map((person, index) => person.last_read === message.id && (
            <div>
            <div 
            key={`read_${index}`}
            className='read-receipt'
            style={{
                float: isMyMessage ? 'right' : 'left',
                backgroundImage: `url(${person?.person?.avatar})`
            }}>
            {/* <span className='name-form-img'>{person?.person.first_name}&nbsp;</span>
            <span>{person?.person.last_name.substr(0, 1)}.</span> // Se superpone los nombres */   } 
            </div>
            </div>
        ))
    }

    const renderMessages = () => {
        const keys = Object.keys(messages);
        return keys.map((key, index) => {
            const message = messages[key];
            const lastMessageKey = index === 0 ? null : keys[index - 1];
            const isMyMessage = userName === message.sender.username;
            return (
                <div key={`msg_${index}`} style={{width: '100'}}>
                    <div className='message-block'>
                        {
                            isMyMessage 
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} lastMessage={messages[lastMessageKey]}/>
                        }
                    </div>
                    <div className='read-receipts' 
                    style={{marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                        {renderReadReceipts(message, isMyMessage)}
                    </div>
                </div>
            )
        })
    }

    if(!chat) return <div class='waiting'><span>&nbsp; Waiting for a chat...</span></div>;

    return (
        <div className='chat-feed'>
            <div className='chat-title-container'>
                <div className='chat-title'>{chat?.title}</div>
                <div className='chat-subtitle'>
                    {chat.people.map((person) => `${person.person.username}, `)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}}/>
            <div className='message-form-container'>
                <MessageForm  {...props} chatId={activeChat}/>
            </div>
        </div>
    )
}

export default ChatFeed;