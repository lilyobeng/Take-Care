import React, {Component} from 'react'
// import'./JournalPage.css'

import { Entries } from '../../components/Entries/Entries';
import JournalForm from '../../components/Form/JournalForm'


class JournalPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            entries: []
        }
    }  

    removeEntry = index => {
        const { entries } = this.state
        this.setState({
          entries: entries.filter ((entry, i) => { return i !== index })
        })
      }
  
    handleSubmit = entry => {
        console.log({ entry })
    this.setState({ entries: [entry, ...this.state.entries] })
    }

    render() { 
        return (
        <div >
            <h1>My Journal App</h1>
            <Entries 
                entryData={this.state.entries} 
                removeEntry={this.removeEntry}
                />
             <JournalForm 
                handleSubmit={this.handleSubmit}
                />
          </div>
      ) 
    } 
}

export default JournalPage;