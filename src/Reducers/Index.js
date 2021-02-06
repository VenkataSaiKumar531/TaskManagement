
import {ADD_REMINDER,DELETE_REMINDER} from '../Actions/Constants';

var MY_OWN;

const reminder =(action)=>{

    return{
        text:action.text,
        id:Math.random()*10 
    }

}

const removeItem =(s=[],a)=>{

    const test= s.filter(task=>task.id!==a);
    console.log(test)
   return test;

}

const reminders  =(state=[], action)=>{

    let reminders=null;

    switch(action.type)
    {
        case ADD_REMINDER: 
        reminders =[...state,reminder(action)];
      
        return reminders;
        case MY_OWN:  return [...state,action.value];
        case DELETE_REMINDER: 
        var ar= removeItem( state,action.id);
        return ar;


        default : return state;
    }

}
export default reminders;