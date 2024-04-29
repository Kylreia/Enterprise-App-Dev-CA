import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const DeleteItem = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeleteItem = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/items/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Item removed successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error occurred');
        enqueueSnackbar('An error occurred', { variant: 'error' }); 
        console.log(error);
      });
  };
  return (
    <div className='p-4'>
      <BackButton />
      <div className='flex items-center justify-center'>
          <h1 className='block antialiased font-sans font-semibold relative mb-10 mt-5 text-center text-4xl leading-tight tracking-normal text-black'>Remove Item</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col items-center border-2 border-slate-400 bg-slate-100 rounded-xl w-[600px] p-8 mx-auto'>
        <h3 className='text-2xl text-gray-600'>Are you sure you want to remove this item?</h3>

        <button className='p-4 rounded bg-red-600 hover:bg-red-700 text-white m-8 w-full' onClick={handleDeleteItem}>Yes</button>
      </div>
    </div>
  )
}

export default DeleteItem