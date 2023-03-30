import { useState, useEffect } from 'react'
import {GetPlayerHand, GetDealerHand} from './Hands'

const FetchCards = () => {
    const [cards, setCards] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchCards = async () => {
        try {
            const response = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
            const data = await response.json();
            setCards(data);
        } catch (error) {
            setError(error);
        };
        setLoading(false);
    }

    useEffect(() => {
        fetchCards();
    }, []);

    if (loading) return 'Loading...';
    if (error) return 'Error!';

    return (
        <div className='blackjack'>
            <div className='buttons'>
                <button>Hit</button>
                <button>Stand</button>
            </div>
            <div className='hands'>
                <GetPlayerHand deckId={cards.deck_id} remaining={cards.remaining}/>
                <GetDealerHand deckId={cards.deck_id} remaining={cards.remaining}/>
            </div>
        </div>
    );
}

export default FetchCards;