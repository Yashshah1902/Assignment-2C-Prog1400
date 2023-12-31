(() => {
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
document.body.innerHTML = `<marquee behavior="alternate"> <h1 id="heading"><u>Assignment 2 - Highest Poker Hand Finder</u></h1> </marquee>`;

// Creating divs
let mainDiv = document.createElement('div');
mainDiv.setAttribute("id", "mainDiv");
document.body.appendChild(mainDiv);

/* Need to work one's finish Code */
let mainDivSelc = document.getElementById('mainDiv');
mainDivSelc.innerHTML = `<b> Draw your Card: </b>`
mainDivSelc.innerHTML += `<button id="draw"> <b> Draw cards! </b> </button>`;
mainDivSelc.innerHTML += `<h2>Images of the Shuffled Cards</h2>`

let firstDiv = document.createElement('div'); // Creating div
firstDiv.setAttribute("id", "imageDisplayer"); // Selected first image displayer for test, given id - #imageDisplayer
mainDiv.appendChild(firstDiv); // Added first div

let answerDiv = document.createElement('div');
answerDiv.setAttribute("id", "answerDiv");
mainDiv.appendChild(answerDiv);

let firstDivImage = document.getElementById('imageDisplayer');
// firstDivImage.innerHTML = `<img src="${imagesPngArray[0]} alt="Card One">`;

let button = document.getElementById('draw');
button.addEventListener("click", () => {// fetching api's
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
    
            let cardsAPI = `https://prog2700.onrender.com/pokerhandtest/straight`;
            //https://deckofcardsapi.com/api/deck/${receivedDeckID}/draw/?count=5

            /*
            https://prog2700.onrender.com/pokerhandtest/royalflush
            https://prog2700.onrender.com/pokerhandtest/straightflush
            https://prog2700.onrender.com/pokerhandtest/fourofakind
            https://prog2700.onrender.com/pokerhandtest/fullhouse
            https://prog2700.onrender.com/pokerhandtest/flush
            https://prog2700.onrender.com/pokerhandtest/straight
            https://prog2700.onrender.com/pokerhandtest/threeofakind
            https://prog2700.onrender.com/pokerhandtest/twopair
            https://prog2700.onrender.com/pokerhandtest/onepair
            https://prog2700.onrender.com/pokerhandtest/highcard
            https://prog2700.onrender.com/pokerhandtest/random
            */
    
            fetch(cardsAPI)
            
            .then(response => response.json())
            .then(json => {cardObject = json
            console.log(cardObject);
            let allValues = (getValue(cardObject));
            valuesArray = allValues.values; // Found this way that I am getting return value of getValueFunction as Object
            imagesPngArray = allValues.imagesPng;
            suitsArray = allValues.suits;
            codesArray = allValues.codes;
    
            // console.log(codesArray);
    
            addingImages();
            // console.log(royalFlush(codesArray));
            // console.log(isStraightFlush(codesArray));
            // console.log(fourOfKind(codesArray));
            // console.log(fullHouse(codesArray));
            // console.log(flush(codesArray));
            console.log(straight(codesArray));
            // console.log(threeOfKind(codesArray));
            // console.log(twoPair(codesArray));
            // console.log(pair(codesArray));

            console.log(getHighestHand(codesArray));
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
        // firstDivImage.innerHTML = `<img src="${imagesPngArray[0]}" alt="Card One"> <br> ${valuesArray[0]} of ${suitsArray[0]}`;
        
        firstDivImage.innerHTML = ""; // For clearing the past div

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
    
    // Royal Flush declaration
    
    let royalFlush = (array) => {
    
        let royalCards = ["A", "K", "Q", "J", "10"];
        let suits = new Array;
        let cards = new Array;
        let testValue = new Array;
    
        // This is only to test the outputs
        // let cardCodes = cardObject.cards;
        // console.log();
    
        for (let i = 0; i < array.length; i++) {
            let splitted = array[i].split('');
            testValue.push(splitted);
        }
        // console.log(testValue);
    
        for (let i = 0; i < testValue.length; i++) {
            cards.push(testValue[i].shift());
            suits.push(testValue[i].pop());
        }
    
        let replacedCards = cards.map((element) => {
            if (element === "0"){
                return "10";
            }
    
            return element;
        })
    
        // console.log(replacedCards)
        // console.log(cards);
        // console.log(suits);
    
        return (
            suits.every(suit => suits[0] === suit) &&
            replacedCards.every(card => royalCards.includes(card))
        );
    }
    
    let isStraightFlush = (array) => {
        let suits = [];
        let ranks = [];
    
        for (let card of array) {
            let rank = card.slice(0, -1);
            let suit = card.slice(-1);
    
            if (rank === "0") {
                rank = "10";
            } else if (rank === "A") {
                rank = "14";
            } else if (rank === "K") {
                rank = "13";
            } else if (rank === "Q") {
                rank = "12";
            } else if (rank === "J") {
                rank = "11";
            }
    
            ranks.push(parseInt(rank));
            suits.push(suit);
        }
    
        let sortedranks = ranks.sort();
        // console.log(sortedranks);
    
        let count = 0;
    
        for (let x = 0; x < suits.length; x++) {
            if (suits[0] === suits[x]){
                count++;
            }
        }
    
        if (count === suits.length){
            for (let i = 0; i < sortedranks.length - 1; i++) {
                if (sortedranks[i] + 1 !== sortedranks[i + 1]) {
                    return false; // Not a straight flush
                }
            }
            return true; // It's a straight flush
        }
    
        return false; // Not enough cards of the same suit for a flush
    }
    
    // Four of Kind
    let fourOfKind = (array) => {
        let suits = [];
        let ranks = [];
    
        for (let card of array) {
            let rank = card.slice(0, -1);
            let suit = card.slice(-1);
    
            if (rank === "0") {
                rank = "10";
            } else if (rank === "A") {
                rank = "14";
            } else if (rank === "K") {
                rank = "13";
            } else if (rank === "Q") {
                rank = "12";
            } else if (rank === "J") {
                rank = "11";
            }
    
            ranks.push(parseInt(rank));
            suits.push(suit);
        }
    
        let count = [];
        let checkingArray = ranks;
        // console.log(checkingArray);
    
        for (let i = 0; i < checkingArray.length; i++) {
            let currentCount = 0; // Initialize the count for the current element
            for (let j = 0; j < checkingArray.length; j++) {
                if (checkingArray[i] === checkingArray[j]) {
                    currentCount++;
                }
            }
            count.push(currentCount); // Push the count for the current element
        }
    
        if (count.includes(4) === true){
            return true;
        }else{
            return false;
        }
    }
    
    // Full House
    let fullHouse = (array) => {
        let suits = [];
        let ranks = [];
    
        for (let card of array) {
            let rank = card.slice(0, -1);
            let suit = card.slice(-1);
    
            if (rank === "0") {
                rank = "10";
            } else if (rank === "A") {
                rank = "14";
            } else if (rank === "K") {
                rank = "13";
            } else if (rank === "Q") {
                rank = "12";
            } else if (rank === "J") {
                rank = "11";
            }
    
            ranks.push(parseInt(rank));
            suits.push(suit);
        }
    
        let count = [];
        let checkingArray = ranks;
    
        for (let i = 0; i < checkingArray.length; i++) {
            let currentCount = 0; // Initialize the count for the current element
            for (let j = 0; j < checkingArray.length; j++) {
                if (checkingArray[i] === checkingArray[j]) {
                    currentCount++;
                }
            }
            count.push(currentCount); // Push the count for the current element
        }
    
        if (count.includes(3) === true && count.includes(2) === true){
            return true;
        }else{
            return false;
        }
    }
    
    // 5. Flush: Any five cards of the same suit, but not in a sequence.
    let flush = (array) => {
        let suits = [];
        let ranks = [];
    
        for (let card of array) {
            let rank = card.slice(0, -1);
            let suit = card.slice(-1);
    
            if (rank === "0") {
                rank = "10";
            } else if (rank === "A") {
                rank = "14";
            } else if (rank === "K") {
                rank = "13";
            } else if (rank === "Q") {
                rank = "12";
            } else if (rank === "J") {
                rank = "11";
            }
    
            ranks.push(parseInt(rank));
            suits.push(suit);
        }
    
        return (suits.every(element => element === suits[0]));
    }
    
    // 6. Straight: Five cards in a sequence, but not of the same suit.
    let straight = (array) => {
        let suits = [];
        let ranks = [];
    
        for (let card of array) {
            let rank = card.slice(0, -1);
            let suit = card.slice(-1);
    
            if (rank === "0") {
                rank = "10";
            } else if (rank === "A") {
                rank = "1";
            } else if (rank === "K") {
                rank = "13";
            } else if (rank === "Q") {
                rank = "12";
            } else if (rank === "J") {
                rank = "11";
            }
    
            ranks.push(parseInt(rank));
            suits.push(suit);
        }
    
        // console.log(ranks);
        
        // A different condition if the Straight is Ace, King, Queen, Jack, 10
            if (ranks.includes(10) || ranks.includes(11) || ranks.includes(12) || ranks.includes(13)){
                let indexedRank = ranks.indexOf(1)
                ranks[indexedRank] = 14;
            }

        // console.log(ranks);

        let sortedranks = ranks.sort((a, b) => a - b); // Ref: https://www.w3schools.com/jsref/jsref_sort.asp
        // console.log(sortedranks);
    
        for (let i = 0; i < sortedranks.length - 1; i++) {
            if (sortedranks[i] + 1 !== sortedranks[i + 1]) {
                return false;
            }
        }
        return true; // It's a straight flush
    }
    
    // 7. Three of a kind: Three cards of the same rank.
    let threeOfKind = (array) => {
        let suits = [];
        let ranks = [];
    
        for (let card of array) {
            let rank = card.slice(0, -1);
            let suit = card.slice(-1);
    
            if (rank === "0") {
                rank = "10";
            } else if (rank === "A") {
                rank = "14";
            } else if (rank === "K") {
                rank = "13";
            } else if (rank === "Q") {
                rank = "12";
            } else if (rank === "J") {
                rank = "11";
            }
    
            ranks.push(parseInt(rank));
            suits.push(suit);
        }
    
        let count = [];
        let checkingArray = ranks;
    
        for (let i = 0; i < checkingArray.length; i++) {
            let currentCount = 0; // Initialize the count for the current element
            for (let j = 0; j < checkingArray.length; j++) {
                if (checkingArray[i] === checkingArray[j]) {
                    currentCount++;
                }
            }
            count.push(currentCount); // Push the count for the current element
        }
    
        if (count.includes(3) === true && count.includes(2) === false){
            return true;
        }else{
            return false;
        }
    }
    
    // 8. Two pair: Two different pairs.
    let twoPair = (array) => {
        let suits = [];
        let ranks = [];
    
        for (let card of array) {
            let rank = card.slice(0, -1);
            let suit = card.slice(-1);
    
            if (rank === "0") {
                rank = "10";
            } else if (rank === "A") {
                rank = "14";
            } else if (rank === "K") {
                rank = "13";
            } else if (rank === "Q") {
                rank = "12";
            } else if (rank === "J") {
                rank = "11";
            }
    
            ranks.push(parseInt(rank));
            suits.push(suit);
        }
    
        let count = [];
        let checkingArray = ranks;
    
        for (let i = 0; i < checkingArray.length; i++) {
            let currentCount = 0; // Initialize the count for the current element
            for (let j = 0; j < checkingArray.length; j++) {
                if (checkingArray[i] === checkingArray[j]) {
                    currentCount++;
                }
            }
            count.push(currentCount); // Push the count for the current element
        }
    
        let counterCheck = count.filter(value => value === 2);
    
        if(counterCheck.length === 4){
            return true
        } else {
            return false;
        }
    
        // return count.filter(value => value === 2).length === 4; // checking if the value of count.filter.length = 4
    }
    
    // 9. Pair: Two cards of the same rank.
    let pair = (array) => {
        let suits = [];
        let ranks = [];
    
        for (let card of array) {
            let rank = card.slice(0, -1);
            let suit = card.slice(-1);
    
            if (rank === "0") {
                rank = "10";
            } else if (rank === "A") {
                rank = "14";
            } else if (rank === "K") {
                rank = "13";
            } else if (rank === "Q") {
                rank = "12";
            } else if (rank === "J") {
                rank = "11";
            }
    
            ranks.push(parseInt(rank));
            suits.push(suit);
        }
    
        let count = [];
        let checkingArray = ranks;
    
        for (let i = 0; i < checkingArray.length; i++) {
            let currentCount = 0; // Initialize the count for the current element
            for (let j = 0; j < checkingArray.length; j++) {
                if (checkingArray[i] === checkingArray[j]) {
                    currentCount++;
                }
            }
            count.push(currentCount); // Push the count for the current element
        }
    
        let counterCheck = count.filter(value => value === 2);
    
        if(counterCheck.length === 2){
            return true
        } else {
            return false;
        }
    
        // return count.filter(value => value === 2).length === 4; // checking if the value of count.filter.length = 4
    }

    // 10. High Card: When you haven't made any of the hands above, the highest card plays. In the example below, the jack plays as the highest card.
let highCard = (array) => {
    let suits = [];
    let ranks = [];

    for (let card of array) {
        let rank = card.slice(0, -1);
        let suit = card.slice(-1);

        if (rank === "0") {
            rank = "10";
        } else if (rank === "A") {
            rank = "14";
        } else if (rank === "K") {
            rank = "13";
        } else if (rank === "Q") {
            rank = "12";
        } else if (rank === "J") {
            rank = "11";
        }

        ranks.push(parseInt(rank));
        suits.push(suit);
    }

    let highestNumber = ranks[0];
    let highestSuits = suits[0];
    for (let x = 0; x < ranks.length; x++) {
        if(ranks[x] > highestNumber){
            highestNumber = ranks[x];
            highestSuits = suits[x];
        }
    }

    if(highestNumber == 14){
        highestNumber = "Ace";
    } else if (highestNumber == 13){
        highestNumber = "King";
    } else if (highestNumber == 12){
        highestNumber = "Queen";
    } else if (highestNumber == 11){
        highestNumber = "Jack";
    }

    if (highestSuits == "S"){
        highestSuits = "Spades";
    } else if (highestSuits == "D"){
        highestSuits = "Daimonds";
    } else if (highestSuits == "C"){
        highestSuits = "Clubs";
    } else if (highestSuits == "H"){
        highestSuits = 'Hearts';
    }

    let result = `${highestNumber.toUpperCase()} of ${highestSuits.toUpperCase()}`;
    return result;
}

    // return "Your highest Hand is Royal Flush";
    let getHighestHand = (array) => {
        if(royalFlush(array) === true){
            answerDiv.innerHTML = "Your highest Hand is Royal Flush";
            return "Your highest Hand is Royal Flush";
        } else if(isStraightFlush(array) === true){
            answerDiv.innerHTML = "Your highest Hand is Straight Flush";
            return "Your highest Hand is Straight Flush";
        } else if(fourOfKind(array) === true){
            answerDiv.innerHTML = "Your highest Hand is Four of Kind";
            return "Your highest Hand is Four of Kind";
        } else if(fullHouse(array) === true){
            answerDiv.innerHTML = "Your highest Hand is Full House";
            return "Your highest Hand is Full House";
        } else if(flush(array) === true){
            answerDiv.innerHTML = "Your highest Hand is Flush";
            return "Your highest Hand is Flush";
        } else if(straight(array) === true){
            answerDiv.innerHTML = "Your highest Hand is Straight";
            return "Your highest Hand is Straight";
        } else if(threeOfKind(array) === true){
            answerDiv.innerHTML = "Your highest Hand is Three of Kind";
            return "Your highest Hand is Three of Kind";
        } else if(twoPair(array) === true){
            answerDiv.innerHTML = "Your highest Hand is Two Pair";
            return "Your highest Hand is Two Pair";
        } else if(pair(array) === true){
            answerDiv.innerHTML = "Your highest Hand is Pair";
            return "Your highest Hand is Pair";
        } else {
            answerDiv.innerHTML = `Your highest Hand is High Card: Your highest Card is ${highCard(array)}`;
            return `Your highest Hand is High Card: Your highest Card is ${highCard(array)}`;
            
        }
    }

})
})()