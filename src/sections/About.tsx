import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='flex w-full max-w-7xl flex-col gap-7 px-5 text-[#A4A4A4] md:flex-row md:justify-between md:gap-10'>
        <div className="flex w-full flex-col justify-between gap-4 md:max-w-md">
            <div className="flex flex-col">
                <p>{"(01)"}</p>
                <p className='text-white'>About Us</p>
            </div>
            <div className="">
                We Ardently Strive To Encapsulate Life's Most Precious Moments, Weaving A Tapestry Of Artistry And A Hint Of Enchanting Magic With The Timeless Essence Of The Human Experience.
            </div>
        </div>
        <div className="right flex w-full flex-col justify-between gap-7 md:max-w-3xl md:gap-10">
            <div className="text-3xl font-light lg:text-4xl xl:text-5xl">
                <span className='font-normal text-white'>Photography</span> is driven by a deep passion for <span className='font-normal text-white'>capturing life's</span> most <span className='font-normal text-white'>precious moments</span> with artistry and a touch of magic
            </div>
            <div className="butt">Button</div>
        </div>
    </div>
  )
}

export default About