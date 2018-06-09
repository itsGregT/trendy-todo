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

  moveToCompleteTasks = (key) => {
    const tasksList = this.state.tasksList.slice();
    const completetasksList = this.state.completetasksList.slice();
    console.log(tasksList[key]);
    completetasksList.push(tasksList[key]);
    tasksList.splice(key, 1);
    this.setState({completetasksList: completetasksList, tasksList: tasksList});
  }

  render() {
    const taskList = this.state.tasksList;
    const completetaskList = this.state.completetasksList;

    return (
      <div className="App">
        <Header />
        <AddTaskForm addTask={this.addTask} />
        <div className="task-list">
          {taskList.map((task, key) =>  
            <Task 
              key={key} 
              details={task} 
              completeTask={this.moveToCompleteTasks} 
              deleteTask={this.deleteTask} 
              index={key}
            />
          )}
        </div>
        <div className="task-list-complete">
          {completetaskList.map((task, key) =>  
            <Task 
              key={key} 
              details={task} 
              completeTask={this.moveToCompleteTasks} 
              deleteTask={this.deleteTask} 
              index={key}
            />
          )}
        </div>
      </div>
    );
  }
}


export default App;