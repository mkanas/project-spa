import React from 'react';
import { getAllNotes } from '../utils/DataUser';
import NoteCard from './NoteCard';

const NoteApp = () => {
    const allNotes = getAllNotes();

    return (
        <div>
            <div className='flex flex-wrap'>
                <NoteCard allNotes={allNotes} />
            </div>
            <button className='p-4 m-5 bg-black rounded-full text-white'>
                +
            </button>
        </div>
    );
};

export default NoteApp;
