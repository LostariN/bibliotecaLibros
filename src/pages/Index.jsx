import React from 'react'
import Book from '../components/Book'
import Layaout from '../components/layaout'
import { useAppContext } from '../store/Store'

function Index() {
    const store = useAppContext()
    return (
        <Layaout>
            <div>
                {store.items.map(elem =>
                    <Book key={elem.id} item={elem} />
                )}
            </div>
        </Layaout>
    )
}

export default Index