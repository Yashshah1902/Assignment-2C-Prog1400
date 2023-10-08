// Manual Testing

// Royal Flush
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
        cards.every(card => royalCards.includes(card))
        );
    }

    console.log(royalFlush(codesArray));

    // Straight Flush

    let straightFlush = (array) => {
        let suits = new Array;
        let cards = new Array;
        let testValue = new Array;
    
        // This is only to test the outputs
        // let cardCodes = cardObject.cards;
        // console.log();
    
        for (let i = 0; i < array.length; i++) {
            testValue.push(array[i].split(''));
        }
        // console.log(testValue);
    
        for (let i = 0; i < testValue.length; i++) {
            cards.push(testValue[i].shift());
            suits.push(testValue[i].pop());
        }
        // console.log(cards);
        // console.log(suits);
    
        function areConsecutive(array) {
            for (let i = 0; i < array.length - 1; i++) {
              if (array[i] + 1 !== array[i + 1]) {
                return false; // If a non-consecutive pair is found, return false
              }
            }
            return true; // If all pairs are consecutive, return true
        }
    
        return (
            suits.every(suit => suits[0] === suit) &&
            areConsecutive(cards)
        );
    }

    console.log(straightFlush(codesArray))