import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css'

// ReactDOM.render(<App />,document.getElementById('root'));

// const root = createRoot(document.getElementById('root'));
// root.render(<App />)


createRoot(document.getElementById('root')).render(<App />)
