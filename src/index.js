import React from "react";
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const App = () => {
  return <Button variant="contained" color="primary">Hello World</Button>;
};

ReactDOM.render(<App />, document.querySelector('#testButton'));
