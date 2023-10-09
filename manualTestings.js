// Manual Testing

// Royal Flush
let pairc = ["2D", "2S", "5H", "7C", "0D"];
let twoPairc = ["2D", "2S", "5H", "4C", "4D"];
let flushc = ["5S", "2S", "6S", "0S", "KS"];
let fullHousec = ["2D", "2S", "2H", "4C", "4D"];
let fourCons = ["2D", "2S", "2H", "2C", "KD"];
let randomArray = ["2D", "4S", "JH", "QC", "KD"];
let threeOfKindc = ["2D", "2S", "2H", "4C", "5D"];
let codesArray = ['AS', 'KS', 'QS', 'JS', '0S'];
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

    console.log(replacedCards)
    // console.log(cards);
    // console.log(suits);

    return (
        suits.every(suit => suits[0] === suit) &&
        replacedCards.every(card => royalCards.includes(card))
        );
    }

    console.log(royalFlush(codesArray));

    // Straight Flush

    // let straightFlush = (array) => {
    //     let suits = new Array;
    //     let cards = new Array;
    //     let testValue = new Array;
    
    // This is only to test the outputs
    // let cardCodes = cardObject.cards;
    // console.log();
    
    //     for (let i = 0; i < array.length; i++) {
    //         let splitted = array[i].split('');
    //         testValue.push(splitted);
    //     }
        // console.log(testValue);
    
    //     for (let i = 0; i < testValue.length; i++) {
    //         cards.push(testValue[i].shift());
    //         suits.push(testValue[i].pop());
    //     }
    
    //     let replacedCards = cards.map((element) => {
    //         if (element === "0"){
    //             return "10";
    //         }
    //         if(element === "A"){
    //             return "14";
    //         }
    //         if (element === "K"){
    //             return "13";
    //         }
    //         if (element === "Q"){
    //             return "12";
    //         }
    //         if (element === "J"){
    //             return "11";
    //         }
    
    //         return element;
    //     })
        
    //     console.log(replacedCards);
    //     let replacedArray = replacedCards.map(element => parseInt(element));
    //     console.log(replacedArray);
    
    //     function areConsecutive(array) {
    //         for (let i = 0; i < array.length - 1; i++) {
    //           if (array[i] + 1 !== array[i + 1]) {
    //             return false; // If a non-consecutive pair is found, return false
    //           }
    //         }
    //         return true; // If all pairs are consecutive, return true
    //     }
    
    //     return (
    //         suits.every(suit => suits[0] === suit) &&
    //         areConsecutive(replacedArray)
    //     );
    // }

    // Straight Flush repeat

    let isStraightFlush = (array) => {
        let suits = [];
        let ranks = []

        for (let card of array) {
            let rank = card.slice(0, -1)
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

        console.log(suits);
        console.log(ranks);

        let sortedranks = ranks.sort();
        console.log(sortedranks);

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

    console.log(isStraightFlush(codesArray));
    console.log(isStraightFlush(randomArray));

    // Four Of A Kind

let fourOfKind = (array) => {
    let suits = [];
    let ranks = []

    for (let card of array) {
        let rank = card.slice(0, -1)
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

    console.log(suits);
    console.log(ranks);

    let count = [];
    let checkingArray = ranks;
    console.log(checkingArray);

    for (let i = 0; i < checkingArray.length; i++) {
        let currentCount = 0; // Initialize the count for the current element
        for (let j = 0; j < checkingArray.length; j++) {
            if (checkingArray[i] === checkingArray[j]) {
                currentCount++;
            }
        }
        count.push(currentCount); // Push the count for the current element
    }
    console.log(count)

    if (count.includes(4) === true){
        return true;
    }else{
        return false;
    }
}

console.log(fourOfKind(codesArray));
console.log(fourOfKind(fourCons));

let fullHouse = (array) => {
    let suits = [];
    let ranks = []

    for (let card of array) {
        let rank = card.slice(0, -1)
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

    console.log(suits);
    console.log(ranks);

    let count = [];
    let checkingArray = ranks;
    console.log(checkingArray);

    for (let i = 0; i < checkingArray.length; i++) {
        let currentCount = 0; // Initialize the count for the current element
        for (let j = 0; j < checkingArray.length; j++) {
            if (checkingArray[i] === checkingArray[j]) {
                currentCount++;
            }
        }
        count.push(currentCount); // Push the count for the current element
    }
    console.log(count)

    if (count.includes(3) === true && count.includes(2) === true){
        return true;
    }else{
        return false;
    }
}

console.log(fullHouse(threeOfKindc));

// 5. Flush: Any five cards of the same suit, but not in a sequence.

let flush = (array) => {
    let suits = [];
    let ranks = []

    for (let card of array) {
        let rank = card.slice(0, -1)
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

    console.log(suits);
    console.log(ranks);

    return (suits.every(element => element === suits[0]));
}

console.log(flush(flushc));
console.log(flush(threeOfKindc));

// 6. Straight: Five cards in a sequence, but not of the same suit.
let straight = (array) => {
    let suits = [];
    let ranks = []

    for (let card of array) {
        let rank = card.slice(0, -1)
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

    console.log(suits);
    console.log(ranks);

    let sortedranks = ranks.sort();
    console.log(sortedranks);

    for (let i = 0; i < sortedranks.length - 1; i++) {
        if (sortedranks[i] + 1 !== sortedranks[i + 1]) {
            return false; // Not a straight flush
        }
    }
    return true; // It's a straight flush
}

console.log(straight(codesArray));
console.log(straight(threeOfKindc));

// 7. Three of a kind: Three cards of the same rank.
let threeOfKind = (array) => {
    let suits = [];
    let ranks = []

    for (let card of array) {
        let rank = card.slice(0, -1)
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

    console.log(suits);
    console.log(ranks);

    let count = [];
    let checkingArray = ranks;
    console.log(checkingArray);

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

console.log(threeOfKind(threeOfKindc));

// 8. Two pair: Two different pairs.
let twoPair = (array) => {
    let suits = [];
    let ranks = []

    for (let card of array) {
        let rank = card.slice(0, -1)
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

    console.log(suits);
    console.log(ranks);

    let count = [];
    let checkingArray = ranks;
    console.log(checkingArray);

    for (let i = 0; i < checkingArray.length; i++) {
        let currentCount = 0; // Initialize the count for the current element
        for (let j = 0; j < checkingArray.length; j++) {
            if (checkingArray[i] === checkingArray[j]) {
                currentCount++;
            }
        }
        count.push(currentCount); // Push the count for the current element
    }
    console.log(count);

    let counterCheck = count.filter(value => value === 2);
    console.log(counterCheck);

    if(counterCheck.length === 4){
        return true
    } else {
        return false;
    }

    // return count.filter(value => value === 2).length === 4; // checking if the value of count.filter.length = 4
}

console.log(twoPair(threeOfKindc));
console.log(twoPair(fullHousec));
console.log(twoPair(twoPairc));

// 9. Pair: Two cards of the same rank.
let pair = (array) => {
    let suits = [];
    let ranks = []

    for (let card of array) {
        let rank = card.slice(0, -1)
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

    console.log(suits);
    console.log(ranks);

    let count = [];
    let checkingArray = ranks;
    console.log(checkingArray);

    for (let i = 0; i < checkingArray.length; i++) {
        let currentCount = 0; // Initialize the count for the current element
        for (let j = 0; j < checkingArray.length; j++) {
            if (checkingArray[i] === checkingArray[j]) {
                currentCount++;
            }
        }
        count.push(currentCount); // Push the count for the current element
    }
    console.log(count);

    let counterCheck = count.filter(value => value === 2);
    console.log(counterCheck);

    if(counterCheck.length === 2){
        return true
    } else {
        return false;
    }

    // return count.filter(value => value === 2).length === 4; // checking if the value of count.filter.length = 4
}

console.log(pair(twoPairc));
console.log(pair(pairc));