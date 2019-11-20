import React, { Component } from "react";

import List from "./List";
import Input from "./Input";
import Title from "./Title";
import Footer from "./Footer";
import { VisibilityFilters } from "./constants";

import { connect } from "react-redux";
import { actionCreators } from "./TodoListRedux";

const mapStateToProps = state => ({
  todos: state.todos,
  visibilityFilter: state.visibilityFilter
});

class App extends Component {
  onAddTodo = text => {
    const { dispatch } = this.props;
    dispatch(actionCreators.add(text));
  };

  onToggleTodo = index => {
    const { dispatch } = this.props;
    dispatch(actionCreators.toggle(index));
  };

  onUpdateVisibilityFilter = visibility => {
    const { dispatch } = this.props;
    dispatch(actionCreators.setVisibilityFilter(visibility));
  };

  onDeleteTodo = index => {
    const { dispatch } = this.props;
    dispatch(actionCreators.remove(index));
  };

  render() {
    const { todos, visibilityFilter } = this.props;

    let visibleTodos = todos;
    if (visibilityFilter === VisibilityFilters.SHOW_ACTIVE) {
      visibleTodos = todos.filter(todo => !todo.completed);
    } else if (visibilityFilter === VisibilityFilters.SHOW_COMPLETED) {
      visibleTodos = todos.filter(todo => todo.completed);
    }

    return (
      <div style={styles.container}>
        <Title>To-Do List</Title>
        <Input
          placeholder={"Type a todo, then hit enter!"}
          onSubmitEditing={this.onAddTodo}
        />
        <List
          list={visibleTodos}
          onToggleTodo={this.onToggleTodo}
          onDeleteTodo={this.onDeleteTodo}
        />
        <Footer
          currentFilter={this.props.visibilityFilter}
          onUpdateVisibilityFilter={this.onUpdateVisibilityFilter}
        />
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column"
  }
};

export default connect(mapStateToProps)(App);
