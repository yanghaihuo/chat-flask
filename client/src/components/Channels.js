import React, { useState, useEffect} from 'react';
import Axios from 'axios';

import Channel from './Channel';
import Messages from './Messages';

const Channels = ({channels, user}) => {

    const [currentChannel, setCurrentChannel] = useState('');
    const [messages, setMessages] = useState(null);  
    const [message, setMessage] = useState(''); 
    
    // useEffect( () => {
    //     currentChannel != ''? loadMessages(currentChannel): null;
    // }, [])

    const loadMessages = async (channel) => {
    
        const url = 'http://localhost:5000/api/bychannel/' + channel.id;
        const { data } = await Axios.get(url);

        return data.data;

    }

    const handleClick = async (channel) => {

        const data = await loadMessages(channel)
        

        setCurrentChannel(channel)
        setMessages(data);
    }

    const handleChange = event => {

        setMessage(event.target.value);
    }

    const handleMessage = async (event) => {
        event.preventDefault()
     
        createNewMessage(user.id, currentChannel.id, message);

        const loadedMessages = await loadMessages(currentChannel);
        console.log('Refreser : ', loadedMessages);
        setMessages(loadedMessages);

    }

    const createNewMessage = async (user_id, channel_id, content) => {

        const url = 'http://localhost:5000/api/messages';
        const { data } = await Axios.post(url, {user_id, channel_id, content});

        console.log(data);
    }

    return (
        <div className="row">
            

            <ul className="channel-panel col-md-3 ">
            <h4>Channels</h4>
            {channels.map(channel => (
                <li key={channel.id}>
                    <Channel 
                        channel={channel}
                        handleClick={handleClick} 
                    />
                </li>
            ))}
            </ul>

            <div className="message-panel col-md-8">
                <div className="panel">
            <h4>{messages
                ? 
                    (currentChannel.name + ' Channel') 
                : 
                    null
                }
                </h4>
                    {messages ? 
                        (<Messages messages={messages} />)
                    :
                        <span>Please, click in a channel and start chatting!</span>    
                    }
                </div>

                { messages ? 
                    (<div className="row">
                        <form 
                            className="form-row col-md-12 ml-3"
                        >
                            <div className="col-auto ">
                                <input 
                                    type="text"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={message}
                                ></input>
                            </div>
                            <div className="col-auto ">
                                <button 
                                    type="submit"
                                    className="btn btn-block btn-primary"
                                    onClick={handleMessage}
                                >Send New Message
                                </button>
                            </div>
                        </form>
                    </div>)
                :
                    null
                }


            </div>

            
        </div>
    );
}

export default Channels;