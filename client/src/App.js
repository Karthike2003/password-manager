import './App.css';
import React, { useState } from 'react';
import axios from 'axios';




function App() {
  const [password,setPassword] = useState('');
  const [title,setTitle] = useState('');
  const addpassword = async () => {
    try {
      const response = await axios.post('http://localhost:3001/addpassword', {
        password: password,
        title: title,
      });

      // Handle the response as needed
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };
  return (
    <div className="App">
      <div className='adding password'>
      <input
          type='text'
          placeholder='ex. facebook'
          
          onChange={(event) => { setTitle(event.target.value) }}
        />
        <input
          type='text'
          placeholder='ex. password123'
          value={password}
          onChange={(event) => { setPassword(event.target.value) }}
        />
     
        <button onClick={addpassword}>Add-Password</button>
        
      </div>
      
      
    </div>
  );
}

export default App;
