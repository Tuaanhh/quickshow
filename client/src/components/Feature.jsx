import React from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import BlueC from './BlueC'
import { dummyShowsData } from '../assets/assets'
import Mcard from './Mcard'
const Feature = () => {
  const navigate = useNavigate()
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>

      <div className='relative flex items-center justify-between pt-20 pb-10'>
        <BlueC top='0' right='-80px' />
        <p className='text-gray-300 font-medium text-lg'>Xem Ngay</p>
        <button onClick={() => navigate('/movies')} className='group flex items-center gap-2 text-sm text-gray-300'>
          Hiện Tất Cả <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5' /></button>
      </div>
      <div>
        {/* goi du lieu tu assets */}
        <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
          {dummyShowsData.slice(0, 5).map((show) => (
            <Mcard key={show._id} movie={show} />
          ))}
        </div> 

      </div>

      <div className='flex justify-center mt-20'>
        <button onClick={() => { navigate('/movies'); scrollTo(0, 0) }}
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'>Hiển Thị Thêm</button>
      </div>
    </div>
  )
}

export default Feature
