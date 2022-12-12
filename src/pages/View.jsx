import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Layaout from '../components/layaout'
import { useAppContext } from '../store/Store';

function View() {
    const [item, setItem] = useState(null)
    const params = useParams();
    const store = useAppContext();

    useEffect(() => {
        const book = store.getItem(params.bookId)
        setItem(book)
    }, [])
    if (!item) {
        return <Layaout>Item not Found</Layaout>
    }

    return (
        <Layaout>
            <h2>{item.title}</h2>
            <div>{item.cover ? <img src={item.cover} width="400" /> : ""}</div>
            <div>{item.author}</div>
            <div>{item.intro}</div>
            <div>{item.completed ? "Leido" : "por leer"}</div>
            <div>{item.review}</div>
        </Layaout>
    )
}

export default View