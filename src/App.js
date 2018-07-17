import React, { Component } from 'react';
import Header from './components/Header';
import AddTaskForm from './components/AddTaskForm';
import SettingsMenu from './components/SettingsMenu';
import Task from './components/Task';
import './css/main.css';

/******************************************
* To Do
* - Drag and drop
* - Populate all lists
******************************************/

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasksList: [],
      doingTasksList: [],
      completeTasksList: [],
      addTaskFormToDoDisplay: false,
      addTaskFormDoingDisplay: false,
      addTaskFormCompleteDisplay: false,
      settingsMenu: false,
      menuType: "default"
    }
  }

  //add task to ToDo list
  addTaskToToDo = (task) => {
    const tasks = this.state.tasksList.slice();
    tasks.push(task);
    this.setState({
      tasksList:tasks,
      addTaskFormToDoDisplay: false
    });
  }

  //add task to Doing list
  addTaskToDoing = (task) => {
    const tasks = this.state.doingTasksList.slice();
    tasks.push(task);
    this.setState({
      doingTasksList:tasks,
      addTaskFormDoingDisplay: false,
    });
  }

  //add task to Complete list
  addTaskToComplete = (task) => {
    const tasks = this.state.completeTasksList.slice();
    tasks.push(task);
    this.setState({
      completeTasksList:tasks,
      addTaskFormCompleteDisplay: false,
    });
  }

  //add task list to ToDo list
  addTaskFormToToDoList = () => {
    this.setState({addTaskFormToDoDisplay: true});
  }

  //add task list to Doing list
  addTaskFormToDoingList = () => {
    this.setState({addTaskFormDoingDisplay: true});
  }

  //add task list to Complete list
  addTaskFormToCompleteList = () => {
    this.setState({addTaskFormCompleteDisplay: true});
  }

  //delete Task From ToDo list
  deleteTaskFromTodo = (key) => {
    const tasksList = this.state.tasksList.slice();
    tasksList.splice(key, 1);
    this.setState({tasksList:tasksList});
  }

  //delete Task From Doing list
  deleteTaskFromDoing = (key) => {
    const doingTasksList = this.state.doingTasksList.slice();
    doingTasksList.splice(key, 1);
    this.setState({doingTasksList:doingTasksList});
  }

  //delete Task From Complete list
  deleteTaskFromComplete = (key) => {
    const completeTasksList = this.state.completeTasksList.slice();
    completeTasksList.splice(key, 1);
    this.setState({completeTasksList:completeTasksList});
  }

  //move task from ToDo to Doing
  moveFromToDoToDoing = (key) => {
    const toDoList = this.state.tasksList.slice();
    const doingList = this.state.doingTasksList.slice();
    doingList.push(toDoList[key]);
    toDoList.splice(key, 1);
    this.setState({
      tasksList: toDoList,
      doingTasksList: doingList
    })
  }

  //move task from Doing to Complete
  moveFromDoingToComplete = (key) => {
    const doingList = this.state.doingTasksList.slice();
    const completeList = this.state.completeTasksList.slice();
    completeList.push(doingList[key]);
    doingList.splice(key, 1);
    this.setState({
      doingTasksList: doingList,
      completeTasksList: completeList
    })
  }

  //move task from Doing to ToDo
  moveFromDoingToToDo = (key) => {
    const doingList = this.state.doingTasksList.slice();
    const toDoList = this.state.tasksList.slice();
    toDoList.push(doingList[key]);
    doingList.splice(key, 1);
    this.setState({
      doingTasksList: doingList,
      tasksList: toDoList
    })
  }

  //move task from Complete to Doing
  moveFromCompleteToDoing = (key) => {
    const completeList = this.state.completeTasksList.slice();
    const doingList = this.state.doingTasksList.slice();
    doingList.push(completeList[key]);
    completeList.splice(key, 1);
    this.setState({
      completeTasksList: completeList,
      doingTasksList: doingList
    })
  }

  //toggle settings menu
  toggleSettingsMenu = () => {
    if(this.state.settingsMenu === false) {
      this.setState({settingsMenu: true});
    } else {
      this.setState({settingsMenu: false});
    }
  }

  //close settings menu 
  closeSettingsMenu = () => {
    this.setState({
      settingsMenu: false,
      menuType: 'default'
    });
  }

  //change between menus
  changeMenuType = () => {
    this.setState({menuType: "background"});
  }

  //populate lists
  populateLists = () => {
    console.log('populate lists');
  }

  //clear all lists
  clearLists = () => {
    this.setState({
      tasksList: [],
      doingTasksList: [],
      completeTasksList: []
    })
  }

  render() {
    const taskList = this.state.tasksList;
    const doingTaskList = this.state.doingTasksList;
    const completeTaskList = this.state.completeTasksList;
    const {settingsMenu, menuType} = this.state;
    const {addTaskFormToDoDisplay, addTaskFormDoingDisplay, addTaskFormCompleteDisplay} = this.state;

    return (
      <div className="App">
        <Header toggleSettingsMenu={this.toggleSettingsMenu.bind(this)} />
        <div className="tasks-list-wrapper">
          <div className="task-list-todo tasks-list">
            <h2>To Do</h2>
            <span className="add-task-icon" onClick={this.addTaskFormToToDoList}>+</span>
            {taskList.map((task, key) =>  
              <Task 
                key={key} 
                details={task} 
                moveFromToDoToDoing={this.moveFromToDoToDoing} 
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
                moveFromDoingToComplete={this.moveFromDoingToComplete}  
                moveFromDoingToToDo={this.moveFromDoingToToDo}
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
                moveFromCompleteToDoing={this.moveFromCompleteToDoing} 
                status="complete"
                deleteTaskFromComplete={this.deleteTaskFromComplete.bind(this, key)} 
                index={key}
              />
            )}
            {addTaskFormCompleteDisplay === true && (<AddTaskForm addTaskToComplete={this.addTaskToComplete} status="complete" />)}
          </div>
        </div>
        <SettingsMenu 
          menuDisplay={settingsMenu} 
          menuType={menuType}
          changeMenuType={this.changeMenuType}
          closeSettingsMenu={this.closeSettingsMenu} 
          populateLists={this.populateLists}
          clearLists={this.clearLists}
        />
      </div>
    );
  }
}


export default App;