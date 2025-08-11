import React from 'react'

export default function SocialMedia() {
    return (
        <>
            <section className='social'>
                <div className="socBox">
                    <i class=" fab fa-facebook-f"></i>
                    <span>12,740 Likes</span>
                </div >
                <div className="socBox">
                    <i class=" fab fa-pinterest" aria-hidden="true"></i>
                    <span>5,600 Fans</span>
                </div >
                <div className="socBox">
                    <i class=" fab fa-twitter" aria-hidden="true"></i>
                    <span>8,700 Followers</span>
                </div >
                <div className="socBox">
                    <i class=" fab fa-instagram" aria-hidden="true"></i>
                    <span>22,700 Followers</span>
                </div >
                <div className="socBox">
                    <i class=" fab fa-youtube" aria-hidden="true"></i>
                    <span>2,700 Subscriber</span>
                </div >
            </section >
        </>
    )
}
