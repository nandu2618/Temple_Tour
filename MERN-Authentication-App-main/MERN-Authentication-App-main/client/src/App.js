import React from 'react';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Register from './Components/Register'
import Login from './Components/Login';
import Userlist from './Components/Userlist';
import Cards from './Components/cards';
import Home from './Components/home';
import Navbar from './Components/BasicExample'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import BasicExample from './Components/BasicExample';


function App() {
  return (
    <div className="App">
    

      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/cards' element={<Cards/>}/>
        
      </Routes>
      {/* <div className='row'>
        <div className='col-md-6'>
          <Home/>
        </div>
        
      </div> */}
      
      <br/>
      <br/>
      
    </div>
  );
}

export default App;