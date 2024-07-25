import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { data } from './Data';

const Search = () => {
  const [search, setSearch] = useState('');
  // <Page search={search}/>
  return (
    <>
    <div >
      <form onChange={(e) => setSearch(e.target.value)} >
            <div className=" ">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-green-600 "
               
              />
             
              </div>
           
            </form>
    </div>
    
    <form className={`searchQuery ${search && ' h-[85vh] '} `}>
        <div> {search ?
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto">
        {/* shopping card */}
        {data
          .filter( ( item ) => {
            return search.toLowerCase() === '' ? item
              : item.Location.toLowerCase().includes( search );
          } )
          .map( ( item ) => (

            <div classsName="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
              <img src={item.image} alt="Terminus" className="w-full min-h-48 object-cover lg:p-4" />
              <div className="p-4" key={item.id}>
                <h3 className="text-[1rem] lg:text-xl font-bold text-gray-800 pb-2">{item.Location}</h3>
                <p className="text-[.75rem] lg:text-[1rem] text-gray-600 pb-1">{item.Rate}</p>
                <p className="text-[.75rem] lg:text-[1rem] text-gray-600">{item.Address}</p>
                <div className="flex items-center justify-between mt-4">
                  <a href="details.html" className="bg-green-200 text-green-600 b-green-500 px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg hover:text-green-700 text-[.75rem] lg:text-[1rem]">More Info</a>
                  <a href="#" className="bg-green-700 text-white px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg text-[.75rem] lg:text-[1rem]">Get Directions</a>
                </div>
              </div>
            </div>
          ) )}
      </div>
      : <div>





      </div>} </div>
    </form>
    
    
      </>
  )
}

export default Search
