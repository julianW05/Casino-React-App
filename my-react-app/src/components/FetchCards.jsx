import { useState, useEffect } from 'react'
import DeckSet from './Hands'

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
        <div>
            <h1>{cards.remaining}</h1>
            <DeckSet deckId={cards.deck_id} remaining={cards.remaining}  />
        </div>
    );
}

export default FetchCards;