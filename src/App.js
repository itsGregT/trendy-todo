import React, { Component } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';

class App extends Component {
  state = {
    tasks:{}
  };

  addTask = task => {
    const tasks = {...this.state.tasks};
    tasks[`task${Date.now()}`] = task;
    this.setState({
      tasks: tasks
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTaskForm addTask={this.addTask} />
        <Task />
      </div>
    );
  }
}

export default App;