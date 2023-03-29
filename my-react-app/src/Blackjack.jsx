import { useState, useEffect } from 'react'
import FetchCards from './components/FetchCards'

const Blackjack = () => {
    return (
        <div className='blackjack'>
            <FetchCards />
        </div>
    )
}

export default Blackjack;