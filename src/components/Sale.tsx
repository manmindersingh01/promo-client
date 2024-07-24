import React from 'react'

type props = {
  data: number
}
const Sale = ({ data }: props) => {
  return (
    <div className=' border-2 border-blue-500 rounded-3xl w-15 h-15 p-2 text-red-300 flex justify-center items-center'>
      {`${data}%off`}
    </div>
  )
}

export default Sale