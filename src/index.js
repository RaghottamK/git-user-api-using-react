import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import PlayApp from './PlayNine';
import registerServiceWorker from './registerServiceWorker';

const ReactApp = (props) => {
    return (
        <div>
            <App />
            <PlayApp />
        </div>
    );
  }
ReactDOM.render(<ReactApp />, document.getElementById('root'));
registerServiceWorker();
