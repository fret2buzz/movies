import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Query from './Query';
import Results from './Results';

const root = ReactDOM.createRoot(document.getElementById('app'));

root.render(
    <React.StrictMode>
        <Query />
        <Results />
    </React.StrictMode>
);


