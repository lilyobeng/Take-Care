function createEntries(data){
    return fetch('http://localhost:3001/journals', {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(data)
    }).then(response => response.json()).then(res => { 
        return ({
            ok: true, 
            status : 200,
            data :res
        })
    })
}



  function getQuote(){
    return fetch('http://localhost:3001/affirmations')
    .then(res => res.json())
    
}

 function deleteEntries(data){
    return fetch('http://localhost:3001/journals', {
        method: 'POST',
        headers: new Headers({"Content-Type": "application/json"}),
        body: JSON.stringify(data)
    }).then(res => res.json())
}



module.exports = {
    getQuote,
    createEntries,
    deleteEntries
}