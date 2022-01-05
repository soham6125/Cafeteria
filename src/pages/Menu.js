import { React, useState } from 'react'
import { motion } from 'framer-motion';
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'
import { MenuList } from '../helpers/MenuList'
import { Select, MenuItem as Option, InputLabel, FormControl } from '@mui/material';

function Menu() {
    const [data, setData] = useState(MenuList)
    const [query, setQuery] = useState("")
    const [sortType, setSortType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleSubmitTwo = (e) => {
        setSortType(() => {
            if(e.target.value === 'price') setData((data) => data.sort((a, b) => a.price > b.price ? 1 : -1));
            else if(e.target.value === 'name') setData((data) => data.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
            return e.target.value;
        });
    }

    return (
        <div>
            {data && 
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className='menu'>
                <h1 className='menuTitle'> Our Menu </h1>
                <div className='search-bar' style={{ display: "flex", alignItems: "center", width: "60vw", justifyContent: "space-between" }}>
                    <form onSubmit={handleSubmit} id="search-box" style={{ display: "flex", flexGrow: 2, flexDirection: "row", alignItems: "center" }}>
                        <input 
                         type="text" 
                         className="input-search" 
                         placeholder="Search for your favourite coffee..."
                         value={query}
                         onChange={(e) => setQuery(e.target.value)}
                        />
                        <button className="btn-search"><i className="fa fa-search"></i></button>
                    </form>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="select-label"> Sort by: </InputLabel>
                            <Select
                             style={{ minWidth: 150, marginBottom: 20, height: 50, backgroundColor: 'white' }}
                             labelId="select-label"
                             label="Sort by:"
                             value={sortType} 
                             onChange={handleSubmitTwo}
                            >
                                <Option value={'name'}> Name </Option>
                                <Option value={'price'}> Price </Option>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='menuList'>
                    {data.filter(coffee => (coffee.name.toLowerCase().includes(query.toLowerCase()))).map((menuItem, key) => {
                        return <MenuItem key={key} name={menuItem.name} image={menuItem.image} price={menuItem.price} />
                    })}
                </div>
            </div>
            </motion.div>}
        </div>
    )
}

export default Menu
