import React from 'react'
import Image from 'next/image'
const Lists = () => {

  const img = [{
    add: 'https://images.pexels.com/photos/20852606/pexels-photo-20852606/free-photo-of-mother-and-daughter-in-traditional-clothing-in-winter.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    heading: "head",
    body: "black head"
  },
  {
    add: 'https://images.pexels.com/photos/1109766/pexels-photo-1109766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1&fit=crop&crop=entropy',
    heading: "head",
    body: "black head"
  },
  {
    add: 'https://images.pexels.com/photos/1109766/pexels-photo-1109766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1&fit=crop&crop=entropy',
    heading: "head",
    body: "black head"
  },

  {
    add: 'https://images.pexels.com/photos/20852606/pexels-photo-20852606/free-photo-of-mother-and-daughter-in-traditional-clothing-in-winter.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load',
    heading: "head",
    body: "black head"
  },
  {
    add: 'https://images.pexels.com/photos/1109766/pexels-photo-1109766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1&fit=crop&crop=entropy',
    heading: "head",
    body: "black head"
  },
  {
    add: 'https://images.pexels.com/photos/1109766/pexels-photo-1109766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1&fit=crop&crop=entropy',
    heading: "head",
    body: "black head"
  },
  ]
  return (
    <div className=' w-full h-auto flex flex-col bg-slate-900 items-center'>
      <div className=' h-32 bg-slate-950 my-4 p-4 w-full text-white flex flex-col justify-center '>
        <h2 className='font-serif text-3xl'>
          Highlighted Campaigns
        </h2>
        <p className='font-extralight text-sm'>
          Creative advertisements from around the world highlighted by the AOTW team.
        </p>

      </div>

      <div className='grid md:grid-cols-4 gap-4 grid-cols-1 px-12'>
        {img.map((event, idx) => {
          return (
            <div key={idx} className=" relative max-w-sm bg-slate-950 border border-slate-900 shadow shadow-md rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <Image className="rounded-t-lg" src={event.add} alt=""
                  width={800} // Add this
                  height={600} // Add this
                />
              </a>
              <div className=' absolute top-0 left-1'>
                <svg className=' w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#ffffff" d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" /></svg>
              </div>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">{event.heading}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{event.body}</p>

                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
              </div>
            </div>

          )
        })}
      </div>
    </div>
  )
}

export default Lists