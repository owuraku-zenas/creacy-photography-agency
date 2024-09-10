import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div className='relative z-0 flex h-[calc(100vh-4rem)] w-full flex-col overflow-hidden md:rounded-2xl'>
        <div  className='absolute bottom-0 left-0 right-0 top-0 -z-20 bg-[url("/images/hero2.jpg")] bg-cover' />
        <div  className='absolute bottom-0 left-0 right-0 top-0 bg-transparent/40' />
        <div className="flex-[1]">Nav</div>
        <div className="flex-[5]">Main Area</div>
        <div className="flex-[3]">Bottom</div>
    </div>
  )
}

export default Hero