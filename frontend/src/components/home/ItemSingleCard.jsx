import { Link } from 'react-router-dom';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle, BiShow } from 'react-icons/bi';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete } from 'react-icons/md';
import { useState } from 'react';
import ItemModal from './ItemModal';

const ItemSingleCard = ({ singleItem }) => {
    const [showModal, setModal] = useState(false);

    return (
        <div className='border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl'>
            <h2 className='absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg'>€{singleItem.price}</h2>
            <h4 className='my-2 text-gray-500'>{singleItem._id}</h4>
            <div className='flex justify-start items-center gap-x-2'>
                <PiBookOpenTextLight className='text-red-300 text-2xl'/>
                <h2 className='my-1'>{singleItem.name}</h2>
            </div>
            <div className='flex justify-start items-center gap-x-2'>
                <BiUserCircle className='text-red-300 text-2xl'/>
                <h2 className='my-1'>{singleItem.brand}</h2>
            </div>
            <div className='flex justify-between items-center gap-x-2 mt-4 p-4'>
                <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer' onClick={() => setModal(true)} />
                <Link to={`/items/details/${singleItem._id}`}>
                    <BsInfoCircle className='text-2xl text-green-800 hover:text-black' />
                </Link>
                <Link to={`/items/edit/${singleItem._id}`}>
                    <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
                </Link>
                <Link to={`/items/delete/${singleItem._id}`}>
                    <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' /> 
                </Link>
            </div>
            {
                showModal && (
                    <ItemModal singleItem={singleItem} onClose={() => setModal(false)} />
                )
            }
        </div>
    )
}

export default ItemSingleCard