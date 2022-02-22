import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.renderGreen = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId),
  );
};

window.unmountGreen = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};

if (!document.getElementById('Green-container')) {
  ReactDOM.render(<App />, document.getElementById('root'));
}