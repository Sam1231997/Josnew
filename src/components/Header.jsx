
import {useState,useEffect} from 'react'
import "../style.css"
  // import { data } from './Data';
  // import Filter from './Filter';
//   import Search from "./Search";

import {Link} from "react-router-dom";
// import axios from 'axios';
  const Header =()=> {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:7000/dbdata`);
          setData(response.data); // Assuming your API returns an array of items
        console.log(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      if (search.trim() !== '') {
        fetchData();
      } else {
        setData([]);
      }
    }, [search]);
  
    return(
        <>
  
       <nav className='flex justify-between lg:justify-evenly items-center p-5 font-poppins '>
          
            
          <div>
              <Link to='/'><img src="/images/logo.png" alt="Logo" className="h-[100px] w-[70px] fload-right" /></Link>
            </div>
        
          <div className="flex items-center space-x-4">
            
            
            {/* <!-- Hamburger Menu Button --> */}
             
            
            
            {/* <!-- Navigation Links for Desktop --> */}
            <div className=" hidden md:flex gap-4 font-semibold ">
              <div className="relative-group">
                <Link to='/nowij' className="text-black hover:text-green-600 font-poppins">Now In Jos</Link>
              </div>
              <div className="relative-group">
              <Link to='/accomodation' className="text-black hover:text-green-600">Accomodations</Link>
              </div>
              <div className="relative group">
              <Link to='/restaurant' className="text-black hover:text-green-600">Restaurants</Link>
              </div>
              <div className="relative group">
              <Link to='/shopping' className="text-black hover:text-green-600">Shopping</Link>
              </div>
              <div className="relative group">
              <Link to='/attraction' className="text-black hover:text-green-600">Attractions</Link>
              </div>
              
            </div>
          </div>
          {/* <!-- Search Bar --> */}
          <div className='hidden lg:flex '>
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
    
        </nav>
        {/* <!-- Mobile Menu --> */}
        <div>
      <button onClick={toggleMenu} className="hamburger">
        &#9776; 
      </button>
      <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
          
            {/* <nav className='h-[8rem]'></nav> */}
            <div className="flex flex-col space-y-4 mb-4">
              
            <div className="relative-group">
                <Link to='/nowij' className="text-black hover:text-green-600" onClick={closeMenu} >Now In Jos</Link>
              </div>
              <div className="relative-group">
              <Link to='/accomodation' className="text-black hover:text-green-600" onClick={closeMenu}>Accomodations</Link>
              </div>
              <div className="relative-group">
              <Link to='/restaurant' className="text-black hover:text-green-600"onClick={closeMenu} >Restaurants</Link>
              </div>
              <div className="relative-group">
              <Link to='/shopping' className="text-black hover:text-green-600"onClick={closeMenu} >Shopping</Link>
              </div>
              <div className="relative-group">
              <Link to='/attraction' className="text-black hover:text-green-600"onClick={closeMenu} >Attractions</Link>
              </div>
            </div>
            
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
    
    
    </div>
    </div>
    
        

        {/* the fetch cards */}
 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> 
          {/* shopping card */}
           {data
              .filter((item)=>{
                return search.toLowerCase() ==='' ? item
                : item.type.toLowerCase().includes(search);
              })
              .map((item) => (
                
                <div classsName="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden" >
              <img src={item.image1} alt="Terminus" className="w-full min-h-48 object-cover lg:p-4"/>
              <div className="p-4" key={item.id}>
                  <h3 className="text-[1rem] lg:text-xl font-bold text-gray-800 pb-2">{item.title}</h3>
                  <p className="text-[.75rem] lg:text-[1rem] text-gray-600 pb-1">{item.date}</p>
                  <p className="text-[.75rem] lg:text-[1rem] text-gray-600">{item.address}</p>
                  <div className="flex items-center justify-between mt-4">
                      <a href="details.html" className="bg-green-200 text-green-600 b-green-500 px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg hover:text-green-700 text-[.75rem] lg:text-[1rem]">More Info</a>
                      <a href="#" className="bg-green-700 text-white px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg text-[.75rem] lg:text-[1rem]">Get Directions</a>
                  </div>
              </div>
              </div>
                
  ))} 
  </div> 

  
    </>
    )
}
export default Header;
