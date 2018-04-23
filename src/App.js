import React, { Component } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';

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
    console.log(tasks);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <AddTaskForm addTask={this.addTask} />
        <TaskList />
      </div>
    );
  }
}

export default App;