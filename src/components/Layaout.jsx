import React from 'react'
import Navbar from './Navbar'

function Layaout({ children }) {
    return (
        <div>
            <Navbar />
            <div>{children}</div>
        </div>
    )
}

export default Layaout