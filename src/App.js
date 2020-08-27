import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/courses/Courses';
import Logo from './components/logo/Logo';

function App() {
  
  return (
    <div className = "fluid-container bg-light">
      <Logo></Logo>
      <Courses></Courses>
    </div>
  )
}

export default App;
