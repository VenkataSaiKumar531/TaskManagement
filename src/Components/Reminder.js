import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import  {addReminder} from '../Actions/Index';
import {deleteReminder} from '../Actions/Index';
import {connect} from 'react-redux';
import {myOwn} from '../Actions/Index';


import Button from '@material-ui/core/Button';
class Reminder extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            value: ""
        }
    }

    hanldeClick =()=>{
        

     
        this.props.addReminder(this.state.value);
        
    }
    handleMyown =()=>{
  
        this.props.myOwn("Annadevaraperaaaaaa");
   
    }
     
    handleInput  = (e)=>{
      
       this.setState({value: e.target.value});   
    }

    handleDelete =(value)=>{
        

        this.props.deleteReminder(value);



    }
    render()
    {
        
        return(
            <React.Fragment>
             <h3>Enter your tasks below</h3>
             <input type="text" plaseholder="Enter Tasks " onChange={this.handleInput}/>
             <Button variant="contained" color="primary" onClick={this.hanldeClick} > Add </Button>
             
             <button onClick={this.handleMyown}>My own Button</button>
             <ol>
             
             {
                 
                 this.props.test.map((task)=>{
                     
                     return(
                         <React.Fragment>
                         <li key={task.id}>{task.text} </li> 
                         
                         <Button color="primary" onClick={()=>this.handleDelete(task.id)}>Delete Task </Button>&#x2715;
                         </React.Fragment>
                     )
                     
                 })
                 
             }
             </ol>
             
            </ React.Fragment>
        )
    }
}

// const  mapDispatchToProps=(dispatch)=>{

//     return bindActionCreators({,dispatch);  // myOwn will takes "caste" , addReminder will take "text"

// }

const  mapStateToProps= (state)=>{
return {
    test: state
};
}
export default  connect(mapStateToProps, {addReminder,deleteReminder})(Reminder);