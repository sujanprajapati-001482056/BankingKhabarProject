import React, { useEffect, useState } from 'react'
import Logo from "../assets/logo.jpg"
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import Details from '../Pages/Details'
import { FaFacebook, FaYoutube, FaGlobe} from "react-icons/fa"

function Header() {
  let [category, setCategory] = useState([])

  useEffect(() => {
    fetch('https://bankingkhabar.com/wp-json/wp/v2/categories')
      .then(res => res.json())
      .then(data => setCategory(data))
  }, [])

  return (
    <>
      <header className='py-3'>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <img className='w-[420px]' src={Logo} alt="Logo" />

            {/* Social Icons */}
            <div className='flex gap-4 text-2xl'>
              <a href="https://www.facebook.com/bankingkhabar.news" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/channel/UCnnnPOH1g0KuO9zxGhX9Gaw/videos" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://english.bankingkhabar.com/?_gl=1*1nlsi7h*_ga*MTcwNjk1NzUwNy4xNzUzNDk5NzU0*_ga_S02E1ZBNBV*czE3NTM2Nzc4NDAkbzUkZzEkdDE3NTM2Nzg0OTIkajYwJGwwJGgw" target="_blank" rel="noopener noreferrer">
                <FaGlobe />
              </a>
            </div>
          </div>

          <nav className='bg-red-700 text-white my-3'>
            <ul className='flex gap-4'>
              <li className='hover:bg-red-600 p-2'>
                <Link to={`/`}>मुख्य  पेज</Link>
              </li>
              {category.map(cat => (
                <li className='hover:bg-red-600 p-2' key={cat.id}>
                  <Link to={`/category/${cat.id}`}>{cat.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/category/:cid/' element={<Category />} />
        <Route path='/detail' element={<Details />} />
      </Routes>
    </>
  )
}

export default Header
