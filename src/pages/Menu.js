import { React, useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import MenuItem from '../components/MenuItem'
import { MenuList } from '../helpers/MenuList'
import '../styles/Menu.css'

function Menu() {
    const [data, setData] = useState(MenuList)
    const [query, setQuery] = useState("")
    // const [sortType, setSortType] = useState('alphabetical');

    // const comparePrice = (a,b) => {
    //     return a - b;
    // }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setData(MenuList.filter(coffee => (coffee.name.toLowerCase().includes(query.toLowerCase()))));
    }

    // useEffect(() => {
    //     if(sortType === 'price') data.sort(comparePrice);
    //     else data.sort();
    // }, [sortType, data])

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
        <div className='menu'>
            <h1 className='menuTitle'> Our Menu </h1>
            <div class="search-box">
                <form onSubmit={handleSubmit}>
                    <button class="btn-search"><i class="fa fa-search"></i></button>
                    <input 
                     type="text" 
                     class="input-search" 
                     placeholder="Search your favourite coffee..."
                     value={query}
                     onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
                {/* <select
                 value={sortType} 
                 onChange={(e) => setSortType(e.target.value)}
                >
                    <option value="alphabetical"> Alphabetical </option>
                    <option value="price"> Price </option>
                </select> */}
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
