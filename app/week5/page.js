import React from 'react';
import Navbar from '../Navbar';
import ItemList from './ItemList';
import HoverNav from '../comps/hoverNav';
import Link from 'next/link';

const Page = () => {
  return(
    <main className="bg-orange-100">
      <div>
        <div className=''>  
        </div>
        <div>
        <ItemList />
        </div>
        <Link href="/">
        <button className=" p-2 ml-8 mb-4 bg-gray-950 rounded text-xl hover:bg-red-500 hover:text-gray-950 transition duration-1000">Home</button>
        </Link>
      </div>

    </main>
  );
}

export default Page;