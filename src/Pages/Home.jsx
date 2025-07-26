import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

function Home() {
     let [post, setPost]=useState([])
    let [catpost, setCatpost]=useState([])
        useEffect(()=>{
            fetch('https://bankingkhabar.com/wp-json/wp/v2/posts').then(a=>a.json()).then(b=>setPost(b))
             fetch('https://bankingkhabar.com/wp-json/wp/v2/posts?categories=2').then(a=>a.json()).then(b=>setCatpost(b))
        },[])
  return (
    <>
        <section className='py-5'>
            <div className="container mx-auto">
                {post.slice(0,4).map(a=><article key={a.id} className='text-center shadow-lg p-3'>
                    <h1 className='text-4xl font-bold text-red-600 py-6'>{a.title.rendered}</h1>
                    <img src={a.featured_image_src} className='mx-auto' alt="" />
                </article>)}
            </div>
        </section>


        <section className='my-5'>
            <div className="container mx-auto">
                <h2 className="font-bold py-2 bg-red-700 text-white p-2"> अन्तरवार्ता </h2>

                    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
         {catpost.slice(0,8).map((a)=>(
        <SwiperSlide key={a.id}>
            <div className='shadow p-2' >
             <img src={a.featured_image_src} alt="" />
                            <h3 className='font-bold py-2'>{a.title.rendered}</h3>
                            </div>
        </SwiperSlide>
         ))}
      </Swiper>


                 
            </div>
        </section>
    </>
  )
}

export default Home