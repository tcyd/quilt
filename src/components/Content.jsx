import React from 'react';
import { Input, Button } from 'antd';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }
  handleClick() {
    if(this.state.todo === ''){
      return;
    }
    this.props.addTodo(this.state.todo);
  }
  handleChange(e) {
    this.setState({
      todo: e.target.value
    });
  }
  render() {
    const todoNodes = this.props.todoList.map(todo => (<li key={todo.id}>{todo.text}</li>))
    return (
      <div className="content">
        <Input id="largeInput" size="large" placeholder="大尺寸" onChange={this.handleChange.bind(this)}/>
        <Button onClick={this.handleClick.bind(this)}>添加</Button>
        <ul>
          {todoNodes}
        </ul>
      </div>
    )
  }
}

export default Content;