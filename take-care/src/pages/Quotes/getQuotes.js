import React from 'react';


function getQuotes(){
  fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

}

getQuotes();

export default React;