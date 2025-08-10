import React from 'react'

export default function Card({ item }) {
    const { id, cover, catgeory, title, authorName, authorImg, time } = item;
    return (
        <div className='box'>
            <div className="img">
                <img src={cover} alt="" />
            </div>
            <div className='text'>
                <span className='category'>{catgeory}</span>
                <h1 className='titleBg'>{title}</h1>
            </div>
            <div className='author flex'>
                <span>by {authorName}</span>
                <span> {time}</span>
            </div>
        </div>
    )
}
