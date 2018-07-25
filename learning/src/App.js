import React, { Component } from 'react';
import StudentsList from './Components/StudentsList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <h1>App Component</h1>
        <StudentsList />
      </div>
    );
  }
}

export default App;
