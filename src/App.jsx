// App.js
import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Content from './components/layout/router.jsx'
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
          <Content />
    </Router>
  </div>    
  );
}

export default App;
