import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderRed = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountRed = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Red-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}