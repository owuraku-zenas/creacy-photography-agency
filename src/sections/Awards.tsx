import ListItem from '@/components/ListItem'
import React from 'react'

type Props = {}

const Awards = (props: Props) => {
    return (
        <div className='flex h-full w-full max-w-7xl flex-col gap-14 text-[#A4A4A4]'>
            <div className="flex w-full flex-col gap-7 px-5 md:flex-row md:justify-between md:gap-10">
                <div className="flex w-full flex-col justify-between gap-4 md:max-w-md">
                    <div className="flex flex-col">
                        <p>{"(04)"}</p>
                        <p className='text-white'>Awards</p>
                    </div>
                </div>
                <div className="flex w-full flex-col justify-between gap-7 md:max-w-2xl md:gap-10">
                    <div className="text-3xl font-light lg:text-4xl xl:text-5xl">
                        <span className='font-normal text-white'>Award</span> is a pixel that <span className='font-normal text-white'>reflecting</span> our ongoing <span className='font-normal text-white'>dedication</span> to innovation and excellence
                    </div>
                </div>
            </div>
            <div className="flex flex-col-reverse gap-10 px-5 md:flex-row md:justify-between md:px-0">
                <div className="flex flex-col gap-2 md:flex-[3]">
                    <ListItem />
                    <ListItem />
                    <ListItem />
                    <ListItem />
                </div>
                <div className="flex flex-col gap-5 md:flex-[2]">
                    <div className='h-52 md:h-72'>
                        <img src="/images/hero2.jpg" alt="" className='h-full w-full rounded-2xl object-cover' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-lg text-white'>A Qiuet Afternoon in the Countryside</p>
                        <p className='text-sm'>As the sun gently descends in the western sky, casting a warm golden glow upon the rolling hills and meadows, the countryside settles into a tranquil serenity.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Awards