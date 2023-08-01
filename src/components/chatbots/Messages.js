import React from 'react';
import {useSelector} from 'react-redux';
const Messages=()=>{
    const messages = useSelector(state=> state.chatbot.messages)
    const displayMessage = (message, index)=>{
      console.log("messages",message)
    if(message.speak == "user"){
        return <div key={index} className="messages_user">
        <p className="message_text-user">{message.text}</p>
     </div>
    }
    else if (message.speak == "bot"){
        return <div className="messages_df">
        <p  className="message_text-df">{message.text}</p>
    </div>
    }
}
    return(
        <div className="messages">
            { messages.map((message,index)=>{
                return displayMessage(message,index)
            })}
            
        </div>
    )
}
export default Messages;