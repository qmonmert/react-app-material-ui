import React, { Component } from 'react';
import Button from 'material-ui/Button';
import SimpleList from './components/SimpleList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>React - MaterialUI</h1>
        <h3>Button</h3>
        <Button raised color="primary">Button</Button>
        <h3>List</h3>
        <SimpleList />
      </div>
    );
  }
}

export default App;
