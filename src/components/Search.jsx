import React, { useState } from 'react'
import {data} from '../data/data'

const Search = () => {
    const [search, setSearch] = useState('')

  return (
            <>
            <h1 className='grid justify-center py-6 text-4xl'>Search your name here</h1>
        
    <div className='grid justify-center'>
        
        <div >
            <form>
                <input 
                className='bg-gray-100 border rounded-lg min-w-full drop-shadow-lg' 
                type='text' 
                placeholder='Put name here...'
                onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <table className='min-w-full' >
                <thead >
                    <tr>
                        <th className='ml-6 px-3 items-center w-45px'>ID</th>
                        <th className='ml-6 px-3 items-center w-45px'>Name</th>
                        <th className='ml-6 px-3 items-center w-45px'>Address</th>
                        <th className='ml-6 px-3 items-center w-45px'>Email</th>
                    </tr>
                </thead>
                <tbody >
                    {data.filter((item) => {
                        return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                    }).map((item) => (
                        <tr key={item.id} className={item.id % 2 === 0 ? 'bg-gray-200' : 'bg-gray-300'} >
                            <td className='ml-6 px-3 items-center w-30'>{item.id}</td>
                            <td className='ml-6 px-3 items-center w-30'>{item.name}</td>
                            <td className='ml-6 px-3 items-center w-30'>{item.address}</td>
                            <td className='ml-6 px-3 items-center w-30'>{item.email}</td>

                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
        
    </div>
    </>
  )
}

export default Search
