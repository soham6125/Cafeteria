import { React, useState } from 'react'
import MenuItem from '../components/MenuItem'
import { MenuList } from '../helpers/MenuList'
import '../styles/Menu.css'

function Menu() {
    const [query, setQuery] = useState("")
    let newList = MenuList;
    if(query === "") newList = MenuList;
    else newList = MenuList.filter(coffee => (coffee.name.toLowerCase().includes(query.toLowerCase())));

    return (
        <div className='menu'>
            <h1 className='menuTitle'> Our Menu </h1>
            <div class="search-box">
                <button class="btn-search"><i class="fa fa-search"></i></button>
                <input type="text" class="input-search" placeholder="Search your favourite coffee..." onChange={e => setQuery(e.target.value)}/>
            </div>
            <div className='menuList'>
                {newList.map((menuItem, key) => {
                    return <MenuItem key={key} name={menuItem.name} image={menuItem.image} price={menuItem.price} />
                })}
            </div>
        </div>
    )
}

export default Menu
