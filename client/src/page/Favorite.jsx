import React from 'react'
import { dummyShowsData } from '../assets/assets'
import Mcard from '../components/Mcard'
import BlueC from '../components/BlueC'

const Favorite = () => {
  return dummyShowsData.length > 0 ?(
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>

      <BlueC top='150px' left='0px'/>
      <BlueC bottom='50px' right='50px'/>
      <h1 className='text-lg font-medium my-4'>Phim Yêu Thích</h1>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {dummyShowsData.map((movie)=>(
          <Mcard movie={movie} key={movie._id}/>
        ))}
      </div>
    </div>

  ):(
    <div className='flex flex-col items-center justify-center h-screen'>
      <p className='text-3xl font-bold text-center'>Không Tìm Thấy Phim</p>
    </div>
  )
    
  
}

export default Favorite
