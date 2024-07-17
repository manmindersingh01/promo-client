import Link from 'next/link'
import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const SubNavbar = () => {
  return (
    <div className='h-24 bg-slate-950 flex items-center justify-between px-4 sm:px-8'>
      <div className='flex items-center'>
        <div className='mx-2 sm:mx-4'>
          <svg className='h-8 w-8 sm:h-12 sm:w-12' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="#add1d1" d="M.6 92.1C.6 58.8 27.4 32 60.4 32c30 0 54.5 21.9 59.2 50.2 32.6-7.6 67.1 .6 96.5 30l-44.3 44.3c-20.5-20.5-42.6-16.3-55.4-3.5-14.3 14.3-14.3 37.9 0 52.2l99.5 99.5-44 44.3c-87.7-87.2-49.7-49.7-99.8-99.7-26.8-26.5-35-64.8-24.8-98.9C20.4 144.6 .6 120.7 .6 92.1zm129.5 116.4l44.3 44.3c10-10 89.7-89.7 99.7-99.8 14.3-14.3 37.6-14.3 51.9 0 12.8 12.8 17 35-3.5 55.4l44 44.3c31.2-31.2 38.5-67.6 28.9-101.2 29.2-4.1 51.9-29.2 51.9-59.5 0-33.2-26.8-60.1-59.8-60.1-30.3 0-55.4 22.5-59.5 51.6-33.8-9.9-71.7-1.5-98.3 25.1-18.3 19.1-71.1 71.5-99.6 99.9zm266.3 152.2c8.2-32.7-.9-68.5-26.3-93.9-11.8-12.2 5 4.7-99.5-99.7l-44.3 44.3 99.7 99.7c14.3 14.3 14.3 37.6 0 51.9-12.8 12.8-35 17-55.4-3.5l-44 44.3c27.6 30.2 68 38.8 102.7 28 5.5 27.4 29.7 48.1 58.9 48.1 33 0 59.8-26.8 59.8-60.1 0-30.2-22.5-55-51.6-59.1zm-84.3-53.1l-44-44.3c-87 86.4-50.4 50.4-99.7 99.8-14.3 14.3-37.6 14.3-51.9 0-13.1-13.4-16.9-35.3 3.2-55.4l-44-44.3c-30.2 30.2-38 65.2-29.5 98.3-26.7 6-46.2 29.9-46.2 58.2C0 453.2 26.8 480 59.8 480c28.6 0 52.5-19.8 58.6-46.7 32.7 8.2 68.5-.6 94.2-26 32.1-32 12.2-12.4 99.5-99.7z" />
          </svg>
        </div>
        <div className='flex gap-4 mx-8 text-sm tracking-wide text-slate-100'>

          <Link href={'#'}>about</Link>


          <Link href={'#'}>products</Link>
        </div>
      </div>
      <div className='mx-4'>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Search" className="flex-grow text-slate-50 " />
          <Button className='' variant='outline' type="submit">Search</Button>
        </div>
      </div>
    </div>
  )
}

export default SubNavbar;
