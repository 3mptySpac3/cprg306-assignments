// Page.js
"use client"
import React, { useState } from 'react';
import Model from './Model';
import ItemList from './ItemList';
import Link from 'next/link';
import ItemsData from './Data.json';
import ImageMap from './ImageMap';


const Page = () => {
  const [isModalOpen, setModelOpen] = useState(false);
  const [items, setItems] = useState(ItemsData.items);
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: '',
    category: '',
    price: ''
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItemWithId = {
      id: Math.max(...items.map(i => i.id)) + 1,
      ...newItem,
      image: ImageMap[newItem.category] || "/f6ba70936b5dadbaf5b40610ca88ec2b.jpg"
    };

  setItems(prevItems => [...prevItems, newItemWithId]);
  setNewItem({
    name: '',
    quantity: '',
    category: '',
    price: ''
  });
  setModelOpen(false);
}

  return (
    <main className="bg-orange-100">
      <div>
        <div>
          <ItemList items={items} setItems={setItems} />
        </div>
        {/* <div className=' text-emerald-100 p-2 bg-gray-800 rounded text-xl justify-center flex hover:bg-emerald-100 hover:text-gray-800 transition duration-1000'>  
          <button onClick={() => setModelOpen(true)}>Add Item</button>
        </div> */}
        <Link href="/">
          <button className=" text-emerald-100 mt-4 p-2 ml-8 mb-4 bg-gray-800 rounded text-xl hover:bg-emerald-100 hover:text-gray-800 transition duration-1000">&lt;</button>
        </Link>
        <Model isOpen={isModalOpen} onClose={() => setModelOpen(false)}>
          <form onSubmit={handleSubmit} style = {{fontFamily: "cursive"}}>
            <div>
              <label className=""  >Item Name:</label>
              <input type="text" name="name" value={newItem.name} onChange={handleInputChange} className=" border border-black w-full" />
            </div>
            <div>
              <label>Item Quantity:</label>
              <input type="number" name="quantity" value={newItem.quantity} onChange={handleInputChange} className=" border border-black w-full" />
            </div>
            <div>
              <label>Price:</label>
              <input type="number" name="price" value={newItem.price} onChange={handleInputChange} className=" border border-black w-full"/>
            </div>
            <div>
              <label>Category</label>
              <select name="category" value={newItem.category} onChange={handleInputChange}
              className="w-full p-2 border border-black mt-1 text-black">
                <option value="" disabled>Select a category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Meat">Meat</option>
                <option value="Dairy">Dairy</option>
                <option value="Grains">Grains</option>
                <option value="Nuts">Nuts</option>
                <option value="Drinks">Bevies</option>
                <option value="Toilet Paper">Toilet Paper</option>
                <option value="Bread">Bread</option>
                <option value="Snacks">Snacks</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button type="submit" className="bg-gray-900 text-white p-2 mb-4 rounded text-xs w-full hover:bg-emerald-100 hover:text-gray-800 transition duration-1000 mt-4" >+</button>
          </form>
        </Model>
         <div className=' text-emerald-100 p-2 bg-gray-800 rounded text-xl justify-center flex hover:bg-emerald-100 hover:text-gray-800 transition duration-1000'>  
          <button onClick={() => setModelOpen(true)}>Add Item</button>
        </div>
      </div>
    </main>
  );
}

export default Page;
