import React from 'react'
import { TDirection } from '../types';


const Pagination = () => {
  
  const handlePaginate = async (direction: TDirection) => {};  
  return (
    <div className='flex justify-center mt-24'>
      <button onClick={() =>handlePaginate(-1)} className='bg-primary py-2 px-4 text-white w-24 rounded'>
        Previous
      </button>
      <button onClick={() =>handlePaginate(1)} className='bg-primary py-2 px-4 text-white w-24 rounded ml-4'>
        Next
      </button>
    </div>
  )
}

export default Pagination
