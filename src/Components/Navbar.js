import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function Navbar() {
  
const items = useSelector((state)=>state.cart)

  return (
    <div>
     <div className='grid grid-cols-3 py-3 border px-4'>
     <div><h1 className='text-2xl font-bold text-pink-700'>E-Commerce</h1></div>
     <div>
       <ul className='flex mx-auto'>
       <li className='font-bold'> <Link to="/">Home</Link></li>
       <li className='ml-4 font-bold'><Link to="cart">Cart</Link></li>

       </ul>


     </div>
     
     <div className='ml-auto'>
        <ul className='flex'>
   <li><button className='px-3 py-2 bg-green-800 text-slate-50 rounded-2xl'><Link to="/Login">Login</Link></button></li>
   <li><button className='px-3 py-2 bg-green-800 text-slate-50 rounded-2xl ml-2 mr-2'><Link to="/Register">Signup</Link></button></li>
   <li className='mt-1'> <h1 className='pt-2 border py-2 px-3 bg-pink-700 rounded-2xl text-white'>cart item: {items.length}</h1></li>

        </ul>

     
      </div> 


     </div>

    </div>
  )
}
