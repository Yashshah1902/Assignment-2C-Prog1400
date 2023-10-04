/*
Author: Yash Shah
Date: 04/10/2023 
*/

// fetching api's
// 1. Deck API = https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// 2. Cards API = https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=5;

// Deck Api
const deckAPI = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deckObject;
let receivedDeckID;
let cardObject;

fetch(deckAPI)
      .then(response => response.json())
      .then(json => {deckObject = json;
        console.log(deckObject);
        receivedDeckID = deckId(deckObject);
        console.log(receivedDeckID);

        let cardsAPI = `https://deckofcardsapi.com/api/deck/${receivedDeckID}/draw/?count=5`;

        fetch(cardsAPI)
        .then(response => response.json())
        .then(json => {cardObject = json
        console.log(cardObject);
        console.log(getValue(cardObject));});
        
    })

// function to retrieve deck_id from deck Object
function deckId(pObject){
    // console.log(pObject.deck_id);
    return pObject.deck_id;
}

let getValue = (pCardObject) => {
    let gettingValues = pCardObject.cards;

    let values = new Array;
    let imagesPng = new Array;
    let suits = new Array;
    let codes = new Array;

    gettingValues.forEach(element => {
            values.push(element.value)
    });

    return values;
};