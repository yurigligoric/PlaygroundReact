import React, {useState} from 'react'
import {sculptureList} from '../data/sculptureList'


const Gallery = () => {
    const [showMore, setShowMore] = useState(false)

    function handleMoreClick () {
        setShowMore(!showMore)
    }


   
  return (
    <div>
        <ul>{sculptureList.map(p => 
                <li key={p.id}>{p.name} 
                    <button className='rounded-full bg-orange-500' onClick={handleMoreClick}><span>Details</span></button>
                    {showMore ? <p>{p.description}</p>  : null  }
                </li>)}
        </ul>
        
    </div>
  )
}

export default Gallery
