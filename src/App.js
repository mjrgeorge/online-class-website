import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Courses from './components/courses/Courses';
import Cover from './components/cover/Cover';

function App() {
  
  return (
    <div className = "fluid-container bg-light">
      <Cover></Cover>
      <Courses></Courses>
    </div>
  )
}

export default App;
