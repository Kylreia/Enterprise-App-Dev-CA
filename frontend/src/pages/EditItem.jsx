import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const EditItem = () => {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {id} = useParams();
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:5555/items/${id}`)
    .then((response) => {
      setName(response.data.name);
      setBrand(response.data.brand);
      setPrice(response.data.price);
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      alert('An error occurred. Please check your input');
      console.log(error);
    });
  }, [])
  const handleEditItem = () => {
    const data = {
      name,
      brand,
      price,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5555/items/${id}`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Details edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error occurred. Please check your input');
        enqueueSnackbar('An error occurred. Please check your input', { variant: 'error' }); 
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <div className='flex items-center justify-center'>
          <h1 className='block antialiased font-sans font-semibold relative mb-10 mt-5 text-center text-4xl leading-tight tracking-normal text-black'>Edit Item</h1>
      </div>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-slate-400 bg-slate-100 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-600'>Name:</label>
          <input
            type='text'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-2 border-slate-400 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-600'>Brand:</label>
          <input
            type='text'
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className='border-2 border-slate-400 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-600'>Price:</label>
          <input
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='border-2 border-slate-400 px-4 py-2 w-full'
          />
        </div>
        <button className='p-2 rounded bg-emerald-300 m-8 hover:bg-emerald-500' onClick={handleEditItem}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default EditItem