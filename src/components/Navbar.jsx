import {useState} from 'react'

const Navbar =()=>{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    return(


<div>
<nav className="flex items-center justify-between p-4 bg-white shadow-xl">
<div className="flex items-center space-x-4">
  <div className="flex items-center">
    <img src="/images/JCITY LOGO 1.png" alt="Logo" className="h-[100px] w-[70px]" />
  </div>
  {/* <!-- Hamburger Menu Button --> */}
  <div className="md:hidden">
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="focus:outline-none"
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
  <div className="hidden md:flex space-x-12">
    <div className="relative group">
      <a href="#" className="text-black hover:text-green-600">NOW IN JOS</a>
    </div>
    <div className="relative group">
      <a href="#" className="text-black hover:text-green-800">ACCOMMODATION</a>
    </div>
    <div className="relative group">
      <a href="#" className="text-black hover:text-green-600">RESTAURANTS</a>
    </div>
    <div className="relative group">
      <a href="#" className="text-black hover:text-green-600">SHOPPING</a>
    </div>
    <div className="relative group">
      <a href="#" className="text-black hover:text-green-600">ATTRACTIONS</a>
    </div>
  </div>
</div>
{/* <!-- Search Bar --> */}
<form onChange={(e) => setSearch(e.target.value)} >
  <div className="relative">
    <input
      type="text"
      placeholder="Search"
      className="px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600"
     
    />
   
    </div>
 
</form>
</nav>
{/* <!-- Mobile Menu --> */}
{isMenuOpen && (
<div className="md:hidden">
  <div className="flex flex-col space-y-2 p-4">
    <a href="#" className="text-black hover:text-green-600">NOW IN JOS</a>
    <a href="#" className="text-black hover:text-green-800">ACCOMMODATION</a>
    <a href="#" className="text-black hover:text-green-600">RESTAURANTS</a>
    <a href="#" className="text-black hover:text-green-600">SHOPPING</a>
    <a href="#" className="text-black hover:text-green-600">ATTRACTIONS</a>
  </div>
</div>

)}

</div>
    )
}
export default Navbar;


       
    
