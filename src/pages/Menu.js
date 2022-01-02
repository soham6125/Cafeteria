import { React, useState } from 'react'
import { motion } from 'framer-motion';
import MenuItem from '../components/MenuItem'
import { MenuList } from '../helpers/MenuList'
import '../styles/Menu.css'

function Menu() {
    const [data, setData] = useState(MenuList)
    const [query, setQuery] = useState("")
    const [sortType, setSortType] = useState("alphabetical");

    const handleSubmit = (e) => {
        e.preventDefault();
        setData(MenuList.filter(coffee => (coffee.name.toLowerCase().includes(query.toLowerCase()))));
    }

    const handleSubmitTwo = (e) => {
        setSortType(e.target.value);
        if(sortType === 'price') setData((data) => data.sort((a, b) => a.price > b.price ? 1 : -1));
        else if(sortType === 'alphabetical') setData((data) => data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className='menu'>
            <h1 className='menuTitle'> Our Menu </h1>
            <div className='grid-container' style={{ display: "flex"}}>
                <div className='item-1'> 
                    <form onSubmit={handleSubmit} id="search-box">
                        <button class="btn-search"><i class="fa fa-search"></i></button>
                        <input 
                         type="text" 
                         class="input-search" 
                         placeholder="Search your favourite coffee..."
                         value={query}
                         onChange={(e) => setQuery(e.target.value)}
                        />
                    </form>
                </div>
                <div id='sorttype-box'>
                    <label> Sort by: </label>
                    <select
                     value={sortType} 
                     onChange={handleSubmitTwo}
                    >
                        <option value='alphabetical'> Alphabetical </option>
                        <option value='price'> Price </option>
                    </select>
                </div>
            </div>
            <div className='menuList'>
                {data.map((menuItem, key) => {
                    return <MenuItem key={key} name={menuItem.name} image={menuItem.image} price={menuItem.price} />
                })}
            </div>
        </div>
        </motion.div>
    )
}

export default Menu
