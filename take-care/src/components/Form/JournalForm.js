import React, { Component } from 'react';

import { createEntries } from '../../service/Journals';

class JournalForm extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            title: '',
            body: ''
        }

        this.state = this.initialState
    }

    handleChange = event => {
        const {name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    submitForm = async (e) => {
        e.preventDefault()
        const payload = {...this.state}
        const response = await createEntries(payload) // Pushes data to the API
        if( response.status === 200  ) { 
            this.setState(this.initialState) // Rest form
            this.props.handleSubmit(response.data) // Update the journal page with the new entry
            console.log('clciked')

        }
    }
 
    render() {
        const {title, body } = this.state;

        return (
            <div>
                <form>
                
                    <label>Title</label>
                        <input 
                            placeholder="Enter title"
                            type="text"
                            name="title"
                            id="title"
                            value={title}
                            onChange={this.handleChange} />
                    
                        <label>Entry</label>
                        <input 
                            placeholder="Hello"
                            type="textarea"
                            name="body"
                            id="body"
                            value={body}
                            onChange={this.handleChange} />
                </form>
                <button onClick={this.submitForm}>Submit</button>
            </div>
        )
    }
}

export default JournalForm;