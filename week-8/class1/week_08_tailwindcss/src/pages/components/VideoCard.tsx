import React from 'react'
import { FaCheckCircle } from 'react-icons/fa';
export default function VideoCard(props:any) {
    return (
        <div>
            <img className='rounded-xl w-full' src="/thumbnail.png" alt="" />
            <div className='grid grid-cols-12 pt-2'>

                <div className='col-span-3 pl-3 '>
                    <img className='rounded-full w-15 h-15 border-[3px] border-red-600' src={props.image} alt="" />
                </div>

                <div className='col-span-9'>
                    <div>
                        {props.title}
                    </div>
                    <div className='flex col-span-11  text-gray-400 items-center'>
                       <FaCheckCircle className='mr-2'/> {props.author}
                    </div>
                    <div className='col-span-11  text-gray-400'>
                        {props.views} views | {props.timestamp}
                    </div>
                </div>

            </div>
        </div>
    )
}
