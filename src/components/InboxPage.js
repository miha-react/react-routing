import React, {Component} from 'react';
import PropTypes from 'prop-types';
import messages from '../messages.json';
import MessagePreview from "./MessagePreview";
import Message from './Message';


class InboxPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            messages: messages
        };
    }
    getChildContext() {
        return {router:{Message}};
    }
    handleClick(messageId){
        this.context.router.push(`/inbox/message/${messageId}`);
    }
    render(){
        const messages = this.state.messages;

        return(

            <div className="InboxPage">
                <div>
                    {messages.map(message => <MessagePreview
                        key ={message.id}
                        title = {message.subject}
                        senderName = {message.senderName}
                        onClick={this.handleClick.bind(null, message.id)}/>)}
                </div>
                <div className="message-container">
                    {this.props.children}
                </div>

            </div>
        )
    }
}
InboxPage.childContextTypes = {
    router: PropTypes.object.isRequired
};

export default InboxPage;

