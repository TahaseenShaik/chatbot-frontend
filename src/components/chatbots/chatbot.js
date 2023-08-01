import React, {useState} from 'react';
import './Chatbot.css';
import {useDispatch} from 'react-redux'
import Messages from './Messages';
import {AiOutlineClose } from "react-icons/ai";
import * as chartbotActions from "../../store/actions/chatbotActions";
const Chatbot=()=>{
    const [query, setQuery]= useState("")
    const dispatch=useDispatch()
    const handleUserQuery=async()=>{

        if(query === ""){
            alert("please enter your query")
            return
        }
        const data={
            text: query
        }
     dispatch(chartbotActions.textQueryAction(data))
        setQuery("")
    }
    // const textQuery = async()=>{
    //     const response= await axios.post("http://localhost:3030/text_query",{
    //         "text":"Hey",
    //         "userId":"tah-214as-sdg"
    //     })
    //     console.log("response from dialogflow",response)
    // }
    return (
        <div className="chatbot"> 
        <div className="chatbot_header">
            <h1 className='chatbot_header-text'>Ask FMS</h1>
            <AiOutlineClose className='chatbot_header-btn' />
        </div>
        <div className="chatbot_body">
        <Messages />
        </div>
        <div className='chatbot_footer'>
            <input className='chatbot_footer-input' type='text' value={query} placeholder='type here'  onChange={(e)=>setQuery(e.target.value)} />
            <button className='chatbot_footer-btn ' onClick={()=> handleUserQuery()} >send</button>
        </div>
        </div>
    )
}
export default Chatbot;