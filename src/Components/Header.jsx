import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.jpg"
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import Details from '../Pages/Details'
import { FaFacebook } from "react-icons/fa";

function Header() {
    let [category, setCategory]=useState([])
    useEffect(()=>{
        fetch('https://bankingkhabar.com/wp-json/wp/v2/categories').then(a=>a.json()).then(b=>setCategory(b))
    },[])
  return (
    <>
      <header className='py-3'>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
            <img className='w-[420px] ' src={Logo} alt="" />
            <FaFacebook />
            </div>
            <nav className='bg-red-700 text-white my-3'>
                <ul className='flex gap-4'>
                    <li className='hover:bg-red-600 p-2'> <Link to={`/`}>मुख्य  पेज</Link></li>
                    {category.map(a=> <li className='hover:bg-red-600 p-2' key={a.id}>
                        <Link to={`/category/${a.id}`}>{a.name}</Link></li>)}
                </ul>
            </nav>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:cid/' element={<Category/>}/>
        <Route path='/detail' element={<Details/>}/>
      </Routes>
    </>
  )
}

export default Header