/*
Author: Yash Shah
Date: 04/10/2023 
*/

// fetching api's
// 1. Deck API = https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// 2. Cards API = https://deckofcardsapi.com/api/deck/1al773bcsnxg/draw/?count=5

// Deck Api
const deckAPI = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deckObject;

fetch(deckAPI)
      .then(response => response.json())
      .then(json => {deckObject = json;
    console.log(deckObject)})

// Cards Api