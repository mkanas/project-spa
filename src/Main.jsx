import React from 'react';
import ReactDOM from 'react-dom/client';
import { NavBar } from './components/NavBar';
import NoteList from './components/NoteList';

import './style/index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <div className='text-white bg-black'>
            <NavBar />
        </div>
        <hr className='py-1' />
        <NoteList />
    </React.StrictMode>
);
