import React, { Component } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './css/main.css';

class App extends Component {
  state = {
    tasks: {}
  }

  addTask = task => {
    //make copy of current state
    const tasks = {...this.state.tasks};
    //add new task
    tasks[`task${Date.now()}`] = task;
    this.setState({ tasks })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTaskForm addTask={this.addTask} />
        <div className="task-list">
          {Object.keys(this.state.tasks).map(key =>  
            <Task key={key} details={this.state.tasks[key]} index={key}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;