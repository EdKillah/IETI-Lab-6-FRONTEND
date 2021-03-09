import React, { Component } from "react";
import Login from "./components/Login";
//import SignUp from "./components/Signup";
import TaskList from "./components/TaskList";
import UserProfile from "./components/UserProfile";
import NewTask from "./components/NewTask";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
//import { TitleSharp } from "@material-ui/icons";
//import axios from "axios";

class App extends Component {
  state = {
    isLogged: false,
    userList: [],
    todos: [
      {
        description: "First task, this is an example",
        responsible: {
          name: "Santiago Carrillo",
          email: "sancarbar@gmail.com",
        },
        status: "ready",
        dueDate: "Sun Feb 14 2021",
      },
      {
        description: "Learn to program in ReactJS",
        responsible: {
          name: "Eduard Jimenez",
          email: "edkillah@mail.com",
        },
        status: "completed",
        dueDate: "Sun Feb 14 2021",
      },
      {
        description: "Learn how to program better",
        responsible: {
          name: "Eduard Jimenez",
          email: "edkillah@mail.com",
        },
        status: "in_progress",
        dueDate: "Sun Feb 14 2021",
      },
    ],
  };

  componentDidMount() {
    const url = "https://cryptic-reef-04829.herokuapp.com/";
    fetch(url+"users/", {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        let userList = [];        
        data.forEach(function (user) {          
          userList.push({
            user
          });
        });        
        this.setState({ userList });        
        this.fillUsers();
      });
      
  }

  fillUsers = () => {    
    if(this.state.userList!==[]){
      const temp = [...this.state.userList];      
      temp.forEach((user, index) => {        
        const description = "Task from backend #"+(1+index);
        const responsible = {name:user.user.name, email: user.user.email};
        const status = "ready";
        const dueDate = "Sun Mar 10 2021";
        this.submitTask({description, responsible, status, dueDate});
      });
    }
  }

  handleLoggin = (logged) => {
    this.setState({
      isLogged: logged,
    });
  };

  submitTask = (task) => {    
    const temp = [...this.state.todos];
    temp.push(task);
    this.setState({
      todos: [...temp],
    });

  };

  render() {
    const LoginView = () => <Login handleLoggin={this.handleLoggin} />;
    const newTaskView = () => <NewTask submitTask={this.submitTask} />;
    const TaskListView = () => (
      <TaskList newTask={this.state.newTask} todos={this.state.todos} />
    );
    return (
      <Router>
        <Switch>
          <Route path="/index" component={TaskListView} />

          <Route exact path="/" component={LoginView} />
          <Route exact path="/singup" component={UserProfile} />
          <Route exact path="/newtask" component={newTaskView} />
        </Switch>
      </Router>
    );
  }
}

export default App;
