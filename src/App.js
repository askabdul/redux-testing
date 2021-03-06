import React, { Component } from "react";
import { connect } from "react-redux";
import { createTask, editTask, fetchTasks } from "./actions";
import TasksPage from "./components/TasksPage";
import "./index.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchTasks());
  }

  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  };

  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, { status }));
  };

  render() {
    return (
      <div className="main-content">
        <TasksPage
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onStatusChange}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { tasks, isLoading } = state.tasks; 
  return { 
    tasks, isLoading 
  };
}
export default connect(mapStateToProps)(App);
