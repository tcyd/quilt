import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todoActions';

class App extends React.Component {
  handleClick() {
    this.props.actions.addTodo('test');
  }
  render() {
    const todoList = this.props.todoList ? this.props.todoList : [];
    const todoNodes = todoList.map(todo => (<li>{todo.text}</li>));
    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>添加</button>
        <ul>
          {todoNodes}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoList: state.todo
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(TodoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
