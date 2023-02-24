import React, { Component } from 'react';
import { DetailPages } from '../pages/DetailPages';
import { addNote } from '../utils/DataUser';
import NoteCard from './NoteCard';

export class NoteApp extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    eventHandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    eventHandleSubmit = (event) => {
        event.preventDefault();

        const NewData = { body, title };
        addNote(NewData);
    };

    render() {
        return (
            <div>
                <NoteCard />
                <DetailPages eventHandleSubmit={this.eventHandleSubmit} />
               
            </div>
        );
    }
}

export default NoteApp;
