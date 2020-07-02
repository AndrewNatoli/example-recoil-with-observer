import React from 'react';
import ReactDOM from 'react-dom';
import { RecoilRoot } from 'recoil';
import App from './App';
import RecoilObserver from './components/RecoilObserver';

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <RecoilObserver />
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);
