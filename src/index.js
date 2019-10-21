import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import initReactFastclick from 'react-fastclick';

import './index.css';

// Prevent context menu events
window.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

// Faster click events
initReactFastclick();

ReactDOM.render(<App />, document.getElementById('app'));
