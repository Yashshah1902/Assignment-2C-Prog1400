/*
Author: Yash Shah
Date: 04/10/2023 
*/

/* DOM */

// selecting body tag for background
// document.body.style.backgroundImage = "url('./Poker-Hand-.png')";
document.body.innerHTML = `<h1 id="heading">Assignment 2 - Poker Card</h1>`;

// Creating divs
let mainDiv

let firstDiv = document.createElement('div'); // Creating div
firstDiv.setAttribute("id", "imageDisplayer"); // Selected first image displayer for test, given id - #imageDisplayer
document.body.appendChild(firstDiv); // Added first div


// fetching api's
// 1. Deck API = https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// 2. Cards API = https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=5;

// Deck Api
const deckAPI = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deckObject;
let receivedDeckID;
let cardObject;
let valuesArray;
let imagesPngArray;
let suitsArray;
let codesArray;

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
        let allValues = (getValue(cardObject));
        valuesArray = allValues.values; // Found this way that I am getting return value of getValueFunction as Object
        imagesPngArray = allValues.imagesPng;
        suitsArray = allValues.suits;
        codesArray = allValues.codes;
        });

        addingImages();
        
    })

/* function Part */    

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

    // Getting values in Array to comapare
    gettingValues.forEach(element => {
            values.push(element.value)
    });

    // Getting imagesPng in Array to comapare
    gettingValues.forEach(element => {
        imagesPng.push(element.images.png)
    });
    // Getting suits in Array to comapare
    gettingValues.forEach(element => {
        suits.push(element.suit)
    });
    // Getting codes in Array to comapare - still checking (if necessary for program or not)
    gettingValues.forEach(element => {
        codes.push(element.code)
    });

    return {values,imagesPng,suits,codes};
};

let addingImages = () => {
    // Printing image on div
    let firstDivImage = document.getElementById('imageDisplayer');
    // firstDivImage.innerHTML = `<img src="${imagesPngArray[0]} alt="Card One">`;
    firstDivImage.innerHTML = "<h2>Images of the Shuffled Cards</h2>";
    firstDivImage.innerHTML += `<image url=""`

};