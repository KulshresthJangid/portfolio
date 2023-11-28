import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={{ marginTop: '10px' }} className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
