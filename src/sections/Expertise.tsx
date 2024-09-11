import React from 'react'

type Props = {}

const Expertise = (props: Props) => {
    return (
        <div className='flex h-full min-h-screen w-full max-w-7xl flex-col gap-6 bg-[#363733] md:rounded-2xl md:p-8'>
            <div className="flex flex-col justify-between md:flex-row">
                <div className="flex w-full max-w-xl flex-col gap-8 p-8">
                    <div className="flex flex-col">
                        <p className='text-[#90908F]'>{"(02)"}</p>
                        <p className='text-white'>Our Expertise</p>
                    </div>
                    <p className='text-3xl lg:text-4xl xl:text-5xl'>
                        When moments capture every dream crafted into beautiful reality
                    </p>
                </div>
                <div className="right flex w-full flex-col overflow-x-auto px-2 text-2xl md:max-w-xs md:items-center md:p-6">
                    <ul className='flex gap-7 py-3 text-left text-[#828380] md:flex-col'>
                        <li className='cursor-pointer text-[#FCFCFC] transition-colors duration-300 ease-in-out'>Landscape</li>
                        <li className='cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#FCFCFC]'>Wildlife</li>
                        <li className='cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#FCFCFC]'>Architectural</li>
                        <li className='cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#FCFCFC]'>Travel</li>
                        <li className='cursor-pointer transition-colors duration-300 ease-in-out hover:text-[#FCFCFC]'>Portrait</li>
                    </ul>
                </div>
            </div>
            <div className="bottom h-full flex-[1] bg-purple-700">Bottom</div>
        </div>
    )
}

export default Expertise
