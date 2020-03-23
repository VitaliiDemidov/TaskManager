import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import TasklistContextProvider from "../context/taskListContext";
import "../App.css";
import Header from "./Header";

const App = () => {
  return (
    <TasklistContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main"></div>
          <Header />
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TasklistContextProvider>
  );
};

export default App;
