import React, { Component } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import Task from './components/Task';
import './css/main.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasksList: [],
      doingTasksList: [],
      completeTasksList: [],
      addTaskFormToDoDisplay: false,
      addTaskFormDoingDisplay: false,
      addTaskFormCompleteDisplay: false
    }
  }

  addTaskToToDo = (task) => {
    const tasks = this.state.tasksList.slice();
    tasks.push(task);
    this.setState({
      tasksList:tasks,
      addTaskFormToDoDisplay: false
    });
  }

  addTaskToDoing = (task) => {
    const tasks = this.state.doingTasksList.slice();
    tasks.push(task);
    this.setState({
      doingTasksList:tasks,
      addTaskFormDoingDisplay: false,
    });
  }

  addTaskToComplete = (task) => {
    const tasks = this.state.completeTasksList.slice();
    tasks.push(task);
    this.setState({
      completeTasksList:tasks,
      addTaskFormCompleteDisplay: false,
    });
  }

  addTaskFormToToDoList = () => {
    this.setState({addTaskFormToDoDisplay: true});
  }

  addTaskFormToDoingList = () => {
    this.setState({addTaskFormDoingDisplay: true});
  }

  addTaskFormToCompleteList = () => {
    this.setState({addTaskFormCompleteDisplay: true});
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

  deleteTaskFromDoing = (key) => {
    const doingTasksList = this.state.doingTasksList.slice();
    doingTasksList.splice(key, 1);
    this.setState({doingTasksList:doingTasksList});
  }

  deleteTaskFromComplete = (key) => {
    const completeTasksList = this.state.completeTasksList.slice();
    completeTasksList.splice(key, 1);
    this.setState({completeTasksList:completeTasksList});
  }

  // moveToCompleteTasks = (key, e) => {
  //   const DtasksList = this.state.tasksList.slice();
  //   const completeTasksList = this.state.completeTasksList.slice();
  //   completeTasksList.push(tasksList[key]);
  //   tasksList.splice(key, 1);
  //   this.setState({completeTasksList: completeTasksList, tasksList: tasksList});
  // }

  // moveToToDoTasks = (key) => {
  //   const tasksList = this.state.tasksList.slice();
  //   const completeTasksList = this.state.completeTasksList.slice();
  //   tasksList.push(completeTasksList[key]);
  //   completeTasksList.splice(key, 1);
  //   this.setState({completeTasksList: completeTasksList, tasksList: tasksList})
  // }

  render() {
    const taskList = this.state.tasksList;
    const doingTaskList = this.state.doingTasksList;
    const completeTaskList = this.state.completeTasksList;
    const  {addTaskFormToDoDisplay, addTaskFormDoingDisplay, addTaskFormCompleteDisplay} = this.state;

    return (
      <div className="App">
        <Header />
        <div className="tasks-list-wrapper">
          <div className="task-list-todo tasks-list">
            <h2>To Do</h2>
            <span className="add-task-icon" onClick={this.addTaskFormToToDoList}>+</span>
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

            {addTaskFormToDoDisplay === true && (<AddTaskForm addTaskToToDo={this.addTaskToToDo} status="todo" />)}
          </div>
          <div className="task-list-doing tasks-list">
            <h2>Doing</h2>
            <span className="add-task-icon" onClick={this.addTaskFormToDoingList}>+</span>
            {doingTaskList.map((task, key) =>  
              <Task 
                key={key} 
                details={task} 
                moveToToDoTasks={this.moveToToDoTasks} 
                status="doing"
                deleteTaskFromDoing={this.deleteTaskFromDoing.bind(this, key)} 
                index={key}
              />
            )}
            {addTaskFormDoingDisplay === true && (<AddTaskForm addTaskToDoing={this.addTaskToDoing} status="doing" />)}
          </div>
          <div className="task-list-complete tasks-list">
            <h2>Complete</h2>
            <span className="add-task-icon" onClick={this.addTaskFormToCompleteList}>+</span>
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
            {addTaskFormCompleteDisplay === true && (<AddTaskForm addTaskToComplete={this.addTaskToComplete} status="complete" />)}
          </div>
        </div>
      </div>
    );
  }
}


export default App;