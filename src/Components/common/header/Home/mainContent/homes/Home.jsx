import React from 'react'
import "./style.css"
import Popular from '../../popular/Popular'

export default function Home() {
    return (
        <>
            <main>
                < div className="container" >
                    <section className='mainContent'>
                        <Popular />
                    </section>
                    <section className='sideContent'>

                    </section>
                </ div>
            </main>
        </>
    )
}
