import React from 'react';

const NoteCard = ({ allNotes, title, body, createdAt, index }) => {
    return allNotes.map((notes) => (
        <div
            key={index}
            className='w-64 max-h-[250px] min-h-[250px] bg-slate-400 overflow-hidden m-4 rounded-xl p-3'
        >
            <div>
                <h1
                    className='underline text-black-700 font-bold'
                    value={title}
                >
                    {notes.title}
                </h1>
                <small value={createdAt}>{notes.createdAt}</small>
                <hr />
            </div>
            <p className='py-2' value={body}>
                {notes.body}
            </p>
        </div>
    ));
};

export default NoteCard;
