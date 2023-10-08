/*
Author: Yash Shah
Date: 04/10/2023 
*/

/**
Transferred files from Own made Git repo: https://github.com/Yashshah1902/Assignment-2C-Prog1400.git
*/

/* DOM */

// selecting body tag for background
// document.body.style.backgroundImage = "url('./Poker-Hand-.png')";
document.body.innerHTML = `<marquee behavior="alternate"> <h1 id="heading">Assignment 2 - Highest Poker Hand</h1> </marquee>`;

// Creating divs
let mainDiv = document.createElement('div');
mainDiv.setAttribute("id", "mainDiv");
document.body.appendChild(mainDiv);

/* Need to work one's finish Code */
// let mainDivSelc = document.getElementById('mainDiv');
// mainDivSelc.innerHTML += `<button id="start" onclick ="function()"> Draw cards! </button>`;

let firstDiv = document.createElement('div'); // Creating div
firstDiv.setAttribute("id", "imageDisplayer"); // Selected first image displayer for test, given id - #imageDisplayer
mainDiv.appendChild(firstDiv); // Added first div


// fetching api's
// 1. Deck API = https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1
// 2. Cards API = https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=5;

// Deck Api
const deckAPI = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
let deckObject;
let receivedDeckID;
let cardObject;
let cards;
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

        addingImages();
        royalFlush(cardObject);
        });
        
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

    // firstDivImage.innerHTML = `<img src="${imagesPngArray[0]}" alt="Card One"> <br> ${valuesArray[0]} of ${suitsArray[0]}`;

    for (let x = 0; x < valuesArray.length; x++) {
        firstDivImage.innerHTML += `<img src="${imagesPngArray[x]}" alt="Card One">`;
    }

    firstDivImage.innerHTML += `<ul>`;
    for (let x = 0; x < valuesArray.length; x++) {
        firstDivImage.innerHTML += `<li> <b>${valuesArray[x]} of ${suitsArray[x]}</b> </li>`;
    }

    firstDivImage.innerHTML += `</ul>`;

};

// let highestPokerHand = () => {
    // let suitSearch;
    // let suitcheckVal = suitsArray[0];
    // let checkingCount = 0;

    // "HEARTS" "CLUBS" "DIAMONDS" "SPADES"
    // for (let index = 0; index < suitsArray.length; index++) {

    //     if (suitsArray[index] === suitcheckVal) {
    //         checkingCount++;
    //     }  
    // }

    // if (checkingCount === suitsArray.length){
    //     suitSearch = true;
    // } else {
    //     suitSearch = false;
    // }


    // if(suitSearch === true){

    // } else {
        
    // }


    // let result = console.log(suitSearch);
    // console.log(checkingCount);
    // console.log(suitsArray.length);
    // console.log(valuesArray);

    // return result;

//     let cloneValue = valuesArray.splice(0);
//     console.log(cloneValue);
    // Replace, "ACE", "KING", "QUEEN", "JACK"  with ints
//     let replacedArray = cloneValue.map(element => {
//         switch (element) {
//             case "ACE":
//                 return 14; // or 1, depending on your needs
//             case "KING":
//                 return 13;
//             case "QUEEN":
//                 return 12;
//             case "JACK":
//                 return 11;
//             default:
    // If it's not one of the specified values, leave it unchanged
//                 return parseInt(element);
//         }
//     });

//     let highestInt = replacedArray[0];

    
    
//     console.log(replacedArray);
    
//     return cloneValue;
// };

// Royal Flush derivation

let royalFlush = (object) => {

    let royalCards = ["A", "K", "Q", "J", "0"];
    let suits = new Array;
    let card = new Array;
    let testValue = new Array;

    // This is only to test the outputs
    // let cardCodes = cardObject.cards;
    // console.log();

    for (let i = 0; i < (object.cards).length; i++) {
        testValue.push(object.cards[i].code.split(''));
    }
    console.log(testValue);

    for (let i = 0; i < testValue.length; i++) {
        card.push(testValue[i].shift());
        suits.push(testValue[i].pop());
    }
    console.log(card);
    console.log(suits);
    
};