import axios from 'axios';
export const UPDATE_MESSAGE='UPDATE_MESSAGE';
export const UPDATE_USER_MESSAGE = "UPDATE_USER_MESSAGE"

export const textQueryAction =(data)=>{
    console.log("data",data)
   return async (dispatch, getState)=>{
    dispatch({type: UPDATE_USER_MESSAGE, data: data})
    const response = await axios.post("http://localhost:3030/text_query",{
        text:data.text,
        userId:"tah-214as-sdg"
    })
    return dispatch({type: UPDATE_MESSAGE,data: response.data})
   }
}