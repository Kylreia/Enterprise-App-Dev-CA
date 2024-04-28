import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import ItemTable from '../components/home/ItemTable';
import ItemCards from '../components/home/ItemCards';

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setType] = useState('table');

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/items')
      .then((response) => {
        setItems(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  return (
    <div className='p-4'>
      <div className='flex justify-center items-center gap-x-4'>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setType('table')}>Table</button>
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg' onClick={() => setType('card')}>Card</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Items List</h1>
        <Link to='items/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? <Spinner /> : showType === 'table' ? ( <ItemTable items={items} /> ) : ( <ItemCards items={items} /> )}
    </div>
  )
}

export default Home