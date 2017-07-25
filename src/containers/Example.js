import { connect } from 'react-redux';

import ExampleComponent from '../components/ExampleComponent';

const mapStateToProps = (state) => {
  const todos = state.example.todos;

  return {
    todos
  };
};

export default connect(mapStateToProps)(ExampleComponent);
