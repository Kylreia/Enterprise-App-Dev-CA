import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import ItemSingleCard from './ItemSingleCard';


const ItemCards = ({ items }) => {
  const [searchTerm, setTerm] = useState('');
  const handleSearch = (event) => {
    setTerm(event.target.value.toLowerCase());
  };

  const filteredItems = items.filter(item => {
    return item.name.toLowerCase().includes(searchTerm) ||
           item.brand.toLowerCase().includes(searchTerm) ||
           item.price.toString().toLowerCase().includes(searchTerm);
  });

  return (
    <div>
      <div className='flex justify-start items-center ml-4'>
        <input type="text"
          placeholder="Search items..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-2 border rounded">
        </input>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4'>
        {filteredItems.map((item) => (
            <ItemSingleCard key={item._id} singleItem={item}/>
        ))}
      </div>
    </div>
  )
}

export default ItemCards