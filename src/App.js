import React, { Component } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './css/main.css';

class App extends Component {
  state = {
    tasksList: [],
    completeTasksList: []
  }

  addTask = (task) => {
    const tasks = this.state.tasksList.slice();
    tasks.push(task);
    this.setState({tasksList:tasks});
  }

  clearForm = () => {
    document.getElementsByClassName("add-task-form").reset();
  }

  deleteTask = (key) => {
    const tasks = this.state.tasksList.slice();
    tasks.splice(key, 1);
    this.setState({tasksList:tasks});
    console.log('deleted');
  }

  moveToCompleteTasks = (key, e) => {
    const tasksList = this.state.tasksList.slice();
    const completeTasksList = this.state.completeTasksList.slice();
    completeTasksList.push(tasksList[key]);
    tasksList.splice(key, 1);
    this.setState({completeTasksList: completeTasksList, tasksList: tasksList});
    console.log("move to complete");
  }

  moveToToDoTasks = (key) => {
    const tasksList = this.state.tasksList.slice();
    const completeTasksList = this.state.completeTasksList.slice();
    tasksList.push(completeTasksList[key]);
    completeTasksList.splice(key, 1);
    this.setState({completeTasksList: completeTasksList, tasksList: tasksList})
    console.log("move to to do");
  }

  render() {
    const taskList = this.state.tasksList;
    const completeTaskList = this.state.completeTasksList;

    return (
      <div className="App">
        <Header />
        <AddTaskForm addTask={this.addTask} clearForm={this.clearForm}/>
        <div className="task-list">
          {taskList.map((task, key) =>  
            <Task 
              key={key} 
              details={task} 
              moveToCompleteTasks={this.moveToCompleteTasks} 
              deleteTask={this.deleteTask} 
              index={key}
            />
          )}
        </div>
        <div className="task-list-complete">
          {completeTaskList.map((task, key) =>  
            <Task 
              key={key} 
              details={task} 
              moveToToDoTasks={this.moveToToDoTasks} 
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