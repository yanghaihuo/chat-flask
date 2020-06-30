import React, { useContext } from 'react';
import channelContext from '../../context/channels/channelContext';
// import taskContext from '../../context/tasks/taskContext';

const Channel = ({channel}) => {

    const channelsContext = useContext(channelContext);
    const { currentChannel } = channelsContext;

    // // get the function of context task
    // const tasksContext = useContext(taskContext);
    // const { getTasks } = tasksContext;

    // function for add current project
    const selectChannel = id => {
        // currentProject(id); // Set the current project
        // getTasks(id); // Filter tasks when on Click
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-light"
                // onClick={ () => selectChannel(channel.id) }
            >
                {channel.name}
            </button>
        </li>

    );
}

export default Channel;