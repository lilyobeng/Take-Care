import { Component } from "react"


const EntryHeader = () => {
    return <h3>Title</h3>
}

const EntryBody = (props) => {

        return (
            <div>
                {props.entryData && (
                    <div>
            {props.entryData.map((line, idx)=>(
            <div key={idx}>
                <h2>{line.title}</h2>
                <p>{line.body}</p>
                <button onClick={() => props.removeEntry(idx)}>Delete</button>
            </div>
            ))}
            </div>
            )}
            </div>
        )
    

    // return (
    //     <div>
    //         {lines}  
    //     </div>
    // )
}

const Entries = (props) => {
    
    const { entryData, removeEntry } = props;

    return (
        <div>
            <h2>My Entries</h2>
           
            <EntryHeader />
            <EntryBody entryData={entryData} removeEntry={removeEntry}/>
        </div>

    )

}

export { Entries};