import React, { useState } from 'react'
// import Logo from './Logo';
// import Dropdown from './Dropdown';
// import Page from './Pages/Page';
import { NavLink } from 'react-router-dom';
// import { data } from './Data';
// import NowIJ from './Pages/NowIJ';
// import Home from './Home';
import Search from './Search';

const Nav = ({}) => {
  // const [openDropdown, setOpendropdown] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [search, setSearch] = useState('');
  
  function hideNav() {
    search(true)
  }
  // <NowIJ search={search}/>
  // <Page search={search} />
  
  return (
    
    
    <>
    {/* <div className={`hidden`}>}
      <Page search={search}/>
      <NowIJ search={search}/>
    </div> */}
    <nav className="main">
      <nav className='flex justify-between lg:justify-evenly items-center p-5 font-poppins '>
          
            
          <div>
              <NavLink to='/'><img src="JCITY LOGO 1.png" alt="Logo" className="h-[100px] w-[70px] float-left " /></NavLink>
            </div>
        
          <div className="flex items-center space-x-4">
            
            
            {/* <!-- Hamburger Menu Button --> */}
             
            
            <div className="md:hidden flex items-center ">
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative focus:outline-none"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
            {/* <!-- Navigation Links for Desktop --> */}
            <div className=" hidden md:flex gap-4 font-semibold ">
              <div className="relative-group">
                <NavLink to='/now-in-jos' className="text-black hover:text-green-600 font-poppins">Now In Jos</NavLink>
              </div>
              <div className="relative-group">
              <NavLink to='/accomodation' className="text-black hover:text-green-600">Hotels</NavLink>
              </div>
              <div className="relative group">
              <NavLink to='/restaurants' className="text-black hover:text-green-600">Restaurants</NavLink>
              </div>
              <div className="relative group">
              <NavLink to='/shopping' className="text-black hover:text-green-600">Shopping</NavLink>
              </div>
              <div className="relative group">
              <NavLink to='/attractions' className="text-black hover:text-green-600">Attractions</NavLink>
              </div>
              <div className="relative group">
              <NavLink to='/hospitals' className="text-black hover:text-green-600">Hospitals</NavLink>
              </div>
            </div>
          </div>
          {/* <!-- Search Bar --> */}
          <div className='hidden lg:flex '>
            {isMenuOpen===true?null:<Search/>}
          </div>
          
        </nav>
        {/* <!-- Mobile Menu --> */}
        {isMenuOpen===true? (
          <div className="md:hidden flex justify-between p-10">
            {/* <nav className='h-[8rem]'></nav> */}
            <div className=''>
              
            <div className="relative-group">
                <NavLink to='/now-in-jos' className="text-black hover:text-green-600">Now In Jos</NavLink>
              </div>
              <div className="relative-group">
              <NavLink to='/accomodation' className="text-black hover:text-green-600">Accomodation</NavLink>
              </div>
              <div className="relative-group">
              <NavLink to='/restaurants' className="text-black hover:text-green-600">Restaurants</NavLink>
              </div>
              <div className="relative-group">
              <NavLink to='/shopping' className="text-black hover:text-green-600">Shopping</NavLink>
              </div>
              <div className="relative-group">
              <NavLink to='/attractions' className="text-black hover:text-green-600">Attractions</NavLink>
              </div>
            </div>
            
            <div className=''>
            <Search/>
            </div>
          </div>
        ):null}   
        <div className={`searchQuery overflow-y-auto bg-black bg-opacity-[.5/1] ${search && 'pt-[8rem] p-40'} `}>
        
        </div>
    </nav>
      
    </>
    
  )
}

export default Nav
