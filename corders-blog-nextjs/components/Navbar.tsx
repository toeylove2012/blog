import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
      <Link href='/'>
        <div className='flex items-center cursor-pointer'>
            <Image src="/logo.png" height={35} width={40} alt='' />
            <span className='font-bold ml-2 text-primary'>Coder's Blog</span>
        </div>
      </Link>
      <ul className='flex items-center'>
        <li className='mr-6 font-medium text-gray-600'>
          <Link href="#">Products</Link>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
          <Link href="#">pricing</Link>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
          <Link href="#">Docs</Link>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
          <Link href='#'>Company</Link>
        </li>
      </ul>
      <ul className='flex items-center'>
        <li className='mr-6 font-medium text-gray-600'>
          <Link href='#' className='hover:text-gray-400'>
            Login
            </Link>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
          <Link href='#' className='bg-primary py-2 px-4 rounded-sm text-white hover:bg-primary-dark transition-all'>
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar