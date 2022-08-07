import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import ContextApi from './context/ContextApi'
import { ProfileContext } from './context/ProfileContext';
import {reducer,initialState} from './Reducer/reducer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProfileContext reducer={reducer} initialState={initialState}>
    <ContextApi>
    <App />
    </ContextApi>
    </ProfileContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
