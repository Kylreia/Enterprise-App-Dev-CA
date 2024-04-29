import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const ItemTable = ({ items }) => {
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
      <table className='w-full border-separate border-spacing-2'>
            <thead>
              <tr>
                <th className='bg-slate-100 border border-slate-600 rounded-md'>No.</th>
                <th className='bg-slate-100 border border-slate-600 rounded-md'>Name</th>
                <th className='bg-slate-100 border border-slate-600 rounded-md max-md:hidden'>Brand</th>
                <th className='bg-slate-100 border border-slate-600 rounded-md max-md:hidden'>Price (€)</th>
                <th className='bg-slate-100 border border-slate-600 rounded-md'>Operations</th>
              </tr>
            </thead>
            <tbody>
              {sortedItems.map((item, index) =>(
                <tr key={item._id} className='h-8'>
                  <td className='bg-slate-100 border border-slate-700 rounded-md text-center'>
                    {index + 1}
                  </td>
                  <td className='bg-slate-100 border border-slate-700 rounded-md text-center'>
                    {item.name}
                  </td>
                  <td className='bg-slate-100 border border-slate-700 rounded-md text-center max-md:hidden'>
                    {item.brand}
                  </td>
                  <td className='bg-slate-100 border border-slate-700 rounded-md text-center max-md:hidden'>
                    {"€" + item.price}
                  </td>
                  <td className='bg-slate-100 border border-slate-700 rounded-md text-center'>
                    <div className='flex justify-center gap-x-4'>
                      <Link to={`/items/details/${item._id}`}>
                        <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                      </Link>
                      <Link to={`/items/edit/${item._id}`}>
                        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                      </Link>
                      <Link to={`/items/delete/${item._id}`}>
                        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
      </table>
    </div>
  )
}

export default ItemTable