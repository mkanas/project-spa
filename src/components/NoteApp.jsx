import React, { Component } from 'react';
import { DetailPages } from '../pages/DetailPages';

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

    render() {
        return (
            <div>
                <NoteCard />
                <DetailPages />
            </div>
        );
    }
}

export default NoteApp;
