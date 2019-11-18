import React from 'react';
import './App.css';
import Header from './Sections/Header/Header';
import Feed from './Sections/Feed/Feed'
import Sidebar from './Sections/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <body>
        <Feed />
        <Sidebar/>
      </body>
    </div>
  );
}

export default App;
