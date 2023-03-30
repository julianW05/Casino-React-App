import { useState, useEffect } from 'react'

    const GetPlayerHand = ({deckId, remaining}) => {

        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)
        const [playerHand, setPlayerHand] = useState({})
        let playerTotal = 0

        const fetchPlayerHand = async () => {
            try {
                const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
                const data = await response.json();
                console.log(data)
                setPlayerHand(data);
            } catch (error) {
                setError(error);
            };
            setLoading(false);
        }
    
        useEffect(() => {
            if (Object.keys(playerHand).length === 0) {
                fetchPlayerHand();
            }
        }, [playerHand]);

        if (loading) return 'Loading...';
        if (error) return 'Error!';

        playerHand.cards.map((card) => 
            {if (card.value === 'JACK') {
                playerTotal += 10
            } else if (card.value === 'QUEEN') {
                playerTotal += 10
            } else if (card.value === 'KING') {
                playerTotal += 10
            } else if (card.value === 'ACE') {
                playerTotal += 11
            } else {
                playerTotal += parseInt(card.value)
            }}
        )
        console.log(playerTotal)

        return (
            <div>
                <h2>Your hand: {playerTotal}</h2>
                <div className='hand'>
                    {playerHand.cards.map((card) => 
                        <div>
                            <img src={card.image} alt={card.code} />
                        </div>
                    )}
                </div>
            </div>
        )
    }
    const GetDealerHand = ({deckId, remaining}) => {
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)
        const [playerHand, setPlayerHand] = useState({})
        let dealerTotal = 0

        const fetchPlayerHand = async () => {
            try {
                const response = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`);
                const data = await response.json();
                console.log(data)
                setPlayerHand(data);
            } catch (error) {
                setError(error);
            };
            setLoading(false);
        }
    
        useEffect(() => {
            if (Object.keys(playerHand).length === 0) {
                fetchPlayerHand();
            }
        }, [playerHand]);

        if (loading) return 'Loading...';
        if (error) return 'Error!';

        playerHand.cards.map((card) => 
            {if (card.value === 'JACK') {
                dealerTotal += 10
            } else if (card.value === 'QUEEN') {
                dealerTotal += 10
            } else if (card.value === 'KING') {
                dealerTotal += 10
            } else if (card.value === 'ACE') {
                dealerTotal += 11
            } else {
                dealerTotal += parseInt(card.value)
            }
            if (dealerTotal > 21 && playerHand.cards[0].value || playerHand.cards[1].value === 'ACE') {
                dealerTotal -= 10
            }}
        )
        console.log(dealerTotal)

        return (
            <div>
            <h2>Dealers hand: {dealerTotal}</h2>
            <div className='hand'>
            {playerHand.cards.map((card) => 
                <div>
                    <img src={card.image} alt={card.code} />
                </div>
            )}
            </div>
            </div>
        )
    }


export {GetPlayerHand, GetDealerHand} ;