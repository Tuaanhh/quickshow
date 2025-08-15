import React, { useState } from 'react'
import BlueC from './BlueC'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Dates = ({ dateTime, id }) => {
    const navigate = useNavigate();
    const [select,setSelect]= useState(null)
    const onBookHandler = ()=>{
        if(!select){
            return toast('Bạn chưa chọn ngày')
        }
        navigate(`/movies/${id}/${select}`)
        scrollTo(0,0)
    }
    return (
        <div id='dates' className='pt-30'>
            <div className='relative flex flex-col md:flex-row items-center justify-between gap-10 p-8 bg-primary/10 border-primary/20 rounded-lg'>
                {/* Hiệu ứng màu nền */}
                <BlueC top='-100px' left='-100px' />
                <BlueC top='100px' right='0px' />

                <div>
                    <p className='text-lg font-semibold '>Chọn Ngày</p>
                    <div className='flex items-center gap-6 text-sm mt-5'>
                        <ChevronLeftIcon width={28} />
                        <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>{Object.keys(dateTime).map((date)=>(
                            <button onClick={()=>setSelect(date)} key={date} 
                            className={`flex flex-col items-center h-14 w-14 justify-center aspect-square rounded cursor-pointer ${select === date ?
                                "bg-primary text-white " :"border border-primary/70"
                            }`}>
                                <span>{new Date(date).getDate()}</span>
                                <span>{new Date(date).toLocaleDateString("en-us",{month:"short"})}</span>
                            </button>
                        ))}
                        </span>
                         <ChevronRightIcon width={28} />
                    </div>
                </div>
                <button onClick={()=>onBookHandler()} className='bg-primary text-white px-8 py-2 rounded hover:bg-primary/90 transition-all cursor-pointer mt-10'>Đặt Ngay</button>
            </div>
        </div>
    
  )
}

export default Dates
