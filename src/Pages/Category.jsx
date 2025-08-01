import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Category() {
  let { cid } = useParams()
  let [catpost, setCatpost] = useState([])

  useEffect(() => {
    axios
      .get(`https://bankingkhabar.com/wp-json/wp/v2/posts?categories=${cid}`)
      .then(res => {
        setCatpost(res.data)
      })
  }, [cid])

  return (
    <div className='container mx-auto'>
      <h1 className="text-3xl font-bold mb-4">बैंकिङ खबर</h1>

      <div className="grid grid-cols-4 gap-4">
        {catpost.slice(0, 8).map(a => (
          <div className='shadow p-2' key={a.id}>
            <img src={a.featured_image_src} alt="" />
            <h3 className='font-bold py-2'>{a.title.rendered}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
