import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/courses/Courses';
import Cover from './components/cover/Cover';
import Navbar from './components/navbar/Navbar';

function App() {
  
  return (
    <div className = "fluid-container bg-light">
      <Cover></Cover>
      <Navbar></Navbar>
      <Courses></Courses>
    </div>
  )
}

export default App;
