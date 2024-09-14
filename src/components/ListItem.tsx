import { ArrowBigLeft, ArrowRight, ArrowUpRight, CircleArrowOutUpRight } from 'lucide-react'
import React from 'react'

type Props = {}

const ListItem = (props: Props) => {
    return (
        <div className="group flex h-32 items-center justify-between border-b-2 border-[#A4A4A4] p-5 transition hover:rounded-2xl hover:border-transparent hover:bg-[#363733] hover:text-white md:h-32">
            <div className="year flex-[1] text-lg md:text-2xl lg:text-3xl">2015</div>
            <div className="flex flex-[3] justify-center text-lg md:text-2xl lg:text-3xl">Sony World Photography Awards</div>
            <div className="button flex h-full w-full flex-[1] flex-col items-end justify-center md:justify-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#A4A4A4] text-[#A4A4A4] group-hover:border-transparent group-hover:bg-white group-hover:text-[#1C1A1F] md:h-14 md:w-14">
                    <ArrowRight className='group-hover:hidden' />
                    <ArrowUpRight className='hidden group-hover:block'/>
                </div>
            </div>
        </div>
    )
}

export default ListItem