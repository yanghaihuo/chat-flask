import React, { Fragment, useContext } from 'react';
import Message from './Message';
import channelContext from '../../context/channels/channelContext';
import messageContext from '../../context/messages/messageContext';

const MessageList = () => {

    const messagesChannel = [
        {content: 'Hi, everyone!'},
        {content: 'This is a great channel!'},
        {content: 'The 4th message'},
        {content: 'How are you today?'},

    ]

    const channelsContext = useContext(channelContext);
    const { channel } = channelsContext;

    // get the message from each channel
    const messagesContext = useContext(messageContext);
    const { messageschannel } = messagesContext;

    // if not current project
    if(!channel) return <h3>Select a Channel from the sidebar</h3>;

    const [currentChannel] = channel;

    // const handleDeleteChannel = () => {
    //     // deleteProject(currentChannel.id);
    // }

    return (
        <Fragment >
            <div className="col-md-12">
                <h3 className="text-center">Channel : {currentChannel.name} </h3>
            </div>
            <ul className="panel">
                {messageschannel.length === 0 ? 
                    (<li className="message"><p>There is no messages</p></li>)
                    : 
                        <div >{messageschannel.map(message => (
                               <Message
                                    key={message.id}
                                    message={message}
                                    timeout={200}
                                    className="message"
                                /> 
                        
                            ))}
                    </div>
                }
            </ul>
            
        </Fragment>
    );
} 


export default MessageList;