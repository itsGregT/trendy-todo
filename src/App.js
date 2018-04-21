import React, { Component } from 'react';
import Header from './components/Header';
import AddTask from './components/AddTask';
import Task from './components/Task';

class App extends Component {
  state = {
    task: {}
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTask />
        <Task title="Eat food" desc="Cook and eat some food"/>
      </div>
    );
  }
}

export default App;