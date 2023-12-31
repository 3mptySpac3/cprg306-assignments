import React from 'react';
import ItemList from './ItemList';
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
        <button className=" text-emerald-100 p-2 ml-8 mb-4 bg-gray-800 rounded text-xl hover:bg-emerald-100 hover:text-gray-800 transition duration-1000">&lt;</button>
        </Link>
      </div>

    </main>
  );
}

export default Page;