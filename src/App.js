import React, { Component } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './css/main.css';

class App extends Component {
  state = {
    tasksList: [],
    completetasksList: []
  }

  addTask = (task) => {
    const tasks = this.state.tasksList.slice();
    tasks.push(task);
    this.setState({tasksList:tasks});
  }

  deleteTask = (key) => {
    const tasks = this.state.tasksList.slice();
    tasks.splice(key, 1);
    this.setState({tasksList:tasks});
  }
*
/
  moveToCompleteTasks = (key) => {
    const tasks = this.state.tasksList.slice();
    const completeTasks = this.state.completeTasksList.slice();
    tasks.splice(key, 1);
    completeTasks.push();

  }*/

  render() {
    return (
      <div className="App">
        <Header />
        <AddTaskForm addTask={this.addTask} />
        <div className="task-list">
          {this.state.tasks.map((task, key) =>  
            <Task key={key} details={task} deleteTask={this.deleteTask} index={key}/>
          )}
        </div>
      </div>
    );
  }
}

export default App;