import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from '../actions/todoActions';
import { Row, Col } from 'antd';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';

class App extends React.Component {
  render() {
    const todoList = this.props.todoList ? this.props.todoList : [];
    return (
      <Row style={{height: '100%'}}>
        <Col span="4" style={{height: '100%'}}>
          <Menu />
        </Col>
        <Col span="20">
          <Header />
          <Content todoList={todoList} addTodo={this.props.actions.addTodo} />
          <Footer />
        </Col>
      </Row>
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
