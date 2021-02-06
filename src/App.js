import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import reminders from './Reducers/Index'

import Reminder from './Components/Reminder';

const store = createStore(reminders); 
function App() {
  return (
    <div className="App">
     <h1> Reminder Pro!!</h1>
     <p>It's time to calculate productivity.......</p>
     
     <Provider store={store}>
     <Reminder/>
     </Provider>
     
    </div>
  );
}

export default App;
