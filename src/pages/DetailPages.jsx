import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/DataUser';
import { useState } from 'react';

export const DetailPages = ({}) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    eventHandleSubmit = (event) => {
        event.preventDefault();

        const NewData = { body, title };
        addNote(NewData);

        navigate('/');
    };
    return (
        <div>
            <form onSubmit={eventHandleSubmit}>
                {title}
                <input
                    type='text'
                    placeholder='Title...'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                {body}
                <input
                    type='text'
                    placeholder='body...'
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                />
            </form>
        </div>
    );
};
