import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';

const ShowItems = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  
  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/items/${id}`)
      .then((response) => {
        setItem(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [])

  return (
    <div className='p-4'>
      <BackButton />
      <div className='flex items-center justify-center'>
          <h1 className='block antialiased font-sans font-semibold relative mb-10 mt-5 text-center text-4xl leading-tight tracking-normal text-black'>Item Details</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col border-2 border-slate-400 bg-slate-100 rounded-xl w-fit p-4 mx-auto '>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>ID:</span>
            <span>{item._id}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Name:</span>
            <span>{item.name}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Brand:</span>
            <span>{item.brand}</span>
          </div>
          <div className='my-4'>
            <span className='text-xl mr-4 text-gray-600'>Price:</span>
            <span>{"€" + item.price}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowItems