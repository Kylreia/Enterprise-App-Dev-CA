import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const ItemTable = ({ items }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
          <thead>
            <tr>
              <th className='border border-slate-600 rounded-md'>No</th>
              <th className='border border-slate-600 rounded-md'>Name</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Brand</th>
              <th className='border border-slate-600 rounded-md max-md:hidden'>Price (€)</th>
              <th className='border border-slate-600 rounded-md'>Operations</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) =>(
              <tr key={item._id} className='h-8'>
                <td className='border border-slate-700 rounded-md text-center'>
                  {index + 1}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
                  {item.name}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {item.brand}
                </td>
                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                  {"€" + item.price}
                </td>
                <td className='border border-slate-700 rounded-md text-center'>
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
  )
}

export default ItemTable