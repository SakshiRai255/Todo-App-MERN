import Navbar from './Authcomponents/Navbar';
import Login from './Authcomponents/Login';
import SignUp from './Authcomponents/SignUp'
import Todo from './TodoComponets/Todo';
import { Navigate } from "react-router-dom";

import {BrowserRouter, Routes, Route,} from "react-router-dom";
import React,{useState,useEffect} from 'react';

import { auth } from './firebase';


function App() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    auth.onAuthStateChanged(user=>{
      if(user) {setUser(user)}
      else {setUser(null)};
    })
  },[])

  return (
    <>
    <BrowserRouter>
      <Navbar user = {user}/>
      <Routes>
        <Route path='/'element={user? <Todo user = {user}/> :<Navigate to = "/login"/>}/>
        <Route path='/login'element={<Login/>}/>
        <Route path='/signup'element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
