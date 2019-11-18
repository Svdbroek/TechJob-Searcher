import React from 'react';

import Header from './Sections/Header/Header';
import Feed from './Sections/Feed/Feed'
import Sidebar from './Sections/Sidebar/Sidebar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Feed />
        <Sidebar/>
      </main>
    </div>
  );
}

export default App;
