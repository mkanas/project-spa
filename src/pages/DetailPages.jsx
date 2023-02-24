import React from 'react';

const [setBody, setTitle] = useState('');
export const DetailPages = ({ body, title, eventHandleSubmit }) => {
    return (
        <div>
            <form onSubmit={eventHandleSubmit}>
                <h1>
                    {title}
                    <input
                        type='text'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </h1>
                <p>
                    {body}
                    <input
                        type='text'
                        value={body}
                        onChange={(event) => setBody(event.target.value)}
                    />
                </p>
            </form>
        </div>
    );
};
