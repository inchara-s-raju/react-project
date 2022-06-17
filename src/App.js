import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import NoMatch from './Components/NoMatch';
import Users from './Components/Users'

function App() {
  return (
  <Router>
   <Routes>
    <Route exact path='/' element={<Home/>}></Route>
    <Route exact path='/Login' element={<Login/>}></Route>
    <Route path='*' element={<NoMatch/>}></Route>
    <Route path='/Users' element={<Users/>}></Route>
   </Routes>
   </Router>

  );
}

export default App;
