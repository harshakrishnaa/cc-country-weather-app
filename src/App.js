
import React from 'react';
import Child1 from './components/child1';

import Child2 from './components/child2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
function App() {

  return (
    <div className="App">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/child1" element={<Child1 />} /> 
          <Route path="/child2" element={<Child2 />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;