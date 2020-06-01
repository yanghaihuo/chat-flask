import React from 'react';
import ChannelList from './ChannelList';

const Chat = ({getChannels, channels}) => {

    
    return(
        <div className="">
            <h2>Chat</h2>
            <ChannelList channels={channels} />
        </div>

    )
}

export default Chat;