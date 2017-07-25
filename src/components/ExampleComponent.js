import React, { Component } from 'react';

class ExampleComponent extends Component {
  render() {
    const { todos } = this.props;
    return (
      <div>
        <p>Example component showing how you can use redux state to display application data.</p>
        <ul>
          {todos.map((todo) => {
            return <li>{todo.label}</li>
          })}
        </ul>
      </div>
    );
  }
}

export default ExampleComponent;
