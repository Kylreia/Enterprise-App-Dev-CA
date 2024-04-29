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
  const [sortConfig, setConfig] = useState(null);

  const handleSearch = (event) => {
    setTerm(event.target.value.toLowerCase());
  };

  const handleSort = (event) => {
    const val = event.target.value;
    if (val) {
      const [field, direction] = val.split('-');
      setConfig({ field, direction });
    } else {
      setConfig(null);
    }
  };

  const sortedItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm) ||
    item.brand.toLowerCase().includes(searchTerm) ||
    item.price.toString().toLowerCase().includes(searchTerm)
  ).sort((a, b) => {
    if(sortConfig) {
      const isReversed = sortConfig.direction === 'desc' ? 1 : -1;
      if (sortConfig.field === 'price') {
        // Numerical sort for prices
        return (a[sortConfig.field] - b[sortConfig.field]) * isReversed;
      } else {
        // String sort for other fields
        const aField = a[sortConfig.field].toString().toLowerCase();
        const bField = b[sortConfig.field].toString().toLowerCase();
        if (aField < bField) return -1 * isReversed;
        if (aField > bField) return 1 * isReversed;
      }
    }
    return 0;
  });

  return (
    <div>
      <div className='flex flex-row space-x-3 ml-4'>
        <div>
          <input type="text"
            placeholder="Search items..."
            value={searchTerm}
            onChange={handleSearch}
            className="mb-4 p-2 border rounded ">
          </input>
        </div>
        <div>
          <select onChange={handleSort} className='mb-4 p-2 border rounded'>
            <option value="">None</option>
            <option value="name-desc">Name (A-Z)</option>
            <option value="name-asc">Name (Z-A)</option>
            <option value="brand-desc">Brand (A-Z)</option>
            <option value="brand-asc">Brand (Z-A)</option>
            <option value="price-desc">Price Lowest to Highest</option>
            <option value="price-asc">Price Highest to Lowest</option>
          </select>
        </div>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4'>
        {sortedItems.map((item) => (
            <ItemSingleCard key={item._id} singleItem={item}/>
        ))}
      </div>
    </div>
  )
}

export default ItemCards