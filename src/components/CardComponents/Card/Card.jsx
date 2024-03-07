import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    console.log(card);
    const { id, picture, card_bg, category, category_bg, description, text_button_bg, title } = card || {}

    return (
        <Link to={`/cardsItem/${id}`}>
            <div className='space-y-2 pb-2 rounded-lg' style={{ background: `${card_bg}` }}>
                <img className='w-full' src={picture} alt="" />
                <div className='px-2 space-y-2'>
                    <h1 style={{ background: `${category_bg}`, color: `${text_button_bg}` }} className='font-semibold inline-block px-2 py-1'>{category}</h1>
                    <h1 style={{ color: `${text_button_bg}` }} className='text-xl font-bold'>{title}</h1>
                </div>
            </div>
        </Link>
    );
};

export default Card;