// Manual Testing

// Royal Flush
let randomArray = ["2D", "4S", "JH", "QC", "KD"]
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
    
    //     // This is only to test the outputs
    //     // let cardCodes = cardObject.cards;
    //     // console.log();
    
    //     for (let i = 0; i < array.length; i++) {
    //         let splitted = array[i].split('');
    //         testValue.push(splitted);
    //     }
    //     // console.log(testValue);
    
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
    
        let counter = [];
        
        for (let x = 0; x < replacedCards.length; x++) {
            let card = replacedCards[i];
            
            for (let y = 0; y < replacedCards.length; y++) {
                const element = replacedCards[y];
                
            }
            
        }
    }

    console.log(straightFlush(codesArray))