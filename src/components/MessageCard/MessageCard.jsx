import React from 'react'
import { Link } from 'react-router-dom';
import './MessageCard.css';

const MessageCard = ({ icon, title, message, showHomeButton }) => {
    return (
        <div className='message-card__container'>
            <div className='message-card__message'>
                <div className='message-card__image-container'>
                    <img src={icon} alt="icon" />
                </div>
                <span>{title}</span>
            </div>
            <span className='message-card__invite'>{message}</span>
            { showHomeButton && <Link to={'/'}>
                <button className='message-card__button'>
                    Ver catálogo
                </button>
            </Link>}
        </div> 
    )
}

export default MessageCard;