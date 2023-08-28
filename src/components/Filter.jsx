import React from 'react'
import context from '../context/Context'

const Filter = ({filter}) => {
    const { filteredProducts } = useContext(context);

    const handleClick = (e) => {
        filteredProducts(e.target.value)
    }
    const capataliseFirstChar = (filterName) =>{
        return filterName.chatAt(0).toUpperCase().slice(1).join("");
    }
    return (
        <>
            <button type='button' value={filter} onClick={handleClick}>{capataliseFirstChar(filter)}</button>
        </>
    )
}

export default Filter
