import Cards from '@/components/Cards'
import React from 'react'

type Props = {}

const Work = (props: Props) => {
    return (
        <div className='flex w-full max-w-7xl flex-col gap-7 px-5 text-[#A4A4A4] md:justify-between md:gap-10'>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col">
                    <p>{"(03)"}</p>
                    <p className='text-white'>Our Work</p>
                </div>
                <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
                    <div className="flex-1 text-3xl font-light md:max-w-lg lg:text-4xl xl:text-5xl">
                        <span className='font-normal text-white'>Explore</span> the artistry and precision behind <span className='font-normal text-white'>our portfolio</span> of timeless photography
                    </div>
                    <div className="flex w-full flex-1 flex-col justify-between md:max-w-md">
                        <p className='w-full text-base lg:text-lg xl:text-xl'>Embark On A Visual Journey Through Our Cherished Moments Captured With Creativity And Precision. Each Image In Our Portfolio Reflects Our Dedication To Preserving Life's Beauty And Significance</p>
                        <div className="butt">efgf</div>
                    </div>
                </div>

            </div>
            <div className="bottom min-h-[calc(100vh-20rem)]">
                <Cards />
            </div>
        </div>
    )
}

export default Work