// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import About from './about';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About />} />
         
          {/* <Route path="users" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route> */}
      </Routes>

    </Router>
  );
}

export default App;
