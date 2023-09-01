import React from 'react'

const SideFilter = () => {
    return (
        <>
            <aside className='filter-section'>
                <form className="filter-search-form">
                    <input type="search" name="productName" id="name" placeholder='Search product' />
                    <button type='submit'>&gt;</button>
                </form>
                <div className="filter-prize">
                    <h4>Filter by Price</h4>
                    <form className="filter-prize-form">
                        <input type="range" name="productPrize" id="prize" min="0" max="260" defaultValue="150" />
                        <button>Filter</button>
                    </form>
                </div>
                <div className="category">
                    <h4>Categories</h4>
                    <div className="category-item">
                        <p>Accessories</p>
                        <p>Men</p>
                        <p>Women</p>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default SideFilter
