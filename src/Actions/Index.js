// Actions creators file

import {ADD_REMINDER } from './Constants';
import {DELETE_REMINDER} from './Constants'

export const addReminder = (text)=>{
   
    

      return {
        type : ADD_REMINDER,
        text :text
       };
} 



// Action Creator is a functons 

export const deleteReminder=(id)=>{

 
    return {
        type:DELETE_REMINDER,
        id:id
        
    };

}

