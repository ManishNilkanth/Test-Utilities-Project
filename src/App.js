import React from 'react';
import NavBar from './Components/NavBar';
import FormText from './Components/FormText';
const App = () => {
  return (
     <div> 
       <NavBar/>
       <div className='container' >
        <FormText title="Enter the text below to analize"/>
       </div>
     </div>
  );
}

export default App;
