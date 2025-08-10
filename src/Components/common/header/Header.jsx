import React from 'react'
import Head from './Head'
import "./header.css"



export default function Header() {

    return (
        <>
            < Head />
            <header>
                <div className="container paddingSmall">
                    <nav >
                        <ul className='flex'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/culture">Culture</a></li>
                            <li><a href="/politics">Politics</a></li>
                            <li><a href="/memes">memes</a></li>
                            <li><a href="/sports">Sports</a></li>
                            <li><a href="/boxed">Boxed</a></li>
                            <li><a href="/reviews">Reviews</a></li>
                        </ul>
                    </nav>
                </div>
            </header >
        </>
    )
}
