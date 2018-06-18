import React, { Component } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import EditIcon from './img/edit-icon.png';
import './css/main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasksList: [],
      completeTasksList: []
    }
  }

  addTask = (task) => {
    const tasks = this.state.tasksList.slice();
    tasks.push(task);
    this.setState({tasksList:tasks});
  }

  deleteTaskFromTodo = (key) => {
    const tasksList = this.state.tasksList.slice();
    tasksList.splice(key, 1);
    this.setState({tasksList:tasksList});
  }

  deleteTaskFromComplete = (key) => {
    const completeTasksList = this.state.completeTasksList.slice();
    completeTasksList.splice(key, 1);
    this.setState({completeTasksList:completeTasksList});
  }

  moveToCompleteTasks = (key, e) => {
    const tasksList = this.state.tasksList.slice();
    const completeTasksList = this.state.completeTasksList.slice();
    completeTasksList.push(tasksList[key]);
    tasksList.splice(key, 1);
    this.setState({completeTasksList: completeTasksList, tasksList: tasksList});
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
        <AddTaskForm addTask={this.addTask} />
        <div className="task-list tasks-list">
          <h2>To Do</h2>
          <img className="edit-icon" src={EditIcon} alt=""/>
          {taskList.map((task, key) =>  
            <Task 
              key={key} 
              details={task} 
              moveToCompleteTasks={this.moveToCompleteTasks} 
              status="todo"
              deleteTaskFromTodo={this.deleteTaskFromTodo.bind(this, key)} 
              index={key}
            />
          )}
        </div>
        <div className="task-list-complete tasks-list">
          <h2>Complete</h2>
          <img className="edit-icon" src={EditIcon} alt=""/>
          {completeTaskList.map((task, key) =>  
            <Task 
              key={key} 
              details={task} 
              moveToToDoTasks={this.moveToToDoTasks} 
              status="complete"
              deleteTaskFromComplete={this.deleteTaskFromComplete.bind(this, key)} 
              index={key}
            />
          )}
        </div>
      </div>
    );
  }
}


export default App;