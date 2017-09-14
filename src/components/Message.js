import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component{
    render(){
        return(
            <div className="app">
                This is message
            </div>
        )
    }
}
Message.contextTypes = {
    router: PropTypes.object.isRequired
}
export default Message;