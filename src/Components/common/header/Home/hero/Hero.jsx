import React from 'react'
import { hero } from "../../../../../dummyData"
import Card from './Card'
import "./hero.css"

export default function Hero() {
    // const items = props.id
    return (
        <>
            <section className='hero' >
                <div className="container">
                    {hero.map((item) => {
                        return <Card key={item.id} item={item}
                        />
                    })}
                </div>
            </section>
        </ >

    )
}
