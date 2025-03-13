import React, { useState } from 'react'

const Star = () => {
    const [rating, setRating] = useState(0)
    const [HoverRating, setHoverRating] = useState(0)
    let star = <i className='fa fa-star text-gray-400'></i>
    let full = <i className='fa fa-star text-yellow-600'></i> 
  return (
    <div className='text-center mt-8 space-x-1 flex flex-row justify-center items-center'>
        {Array.from({length: 5}, (_,i) => 
        <span 
            onMouseEnter={() => setHoverRating(i + 1)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(i + 1)} 
            key={i}
        >
            {HoverRating ? HoverRating >= i + 1 ? full : star : rating >= i + 1 ? full : star}
        </span>)}
        <p className='font-semibold text-lg pl-2'>{HoverRating ? HoverRating : rating}</p>

    </div>
  )
}

export default Star