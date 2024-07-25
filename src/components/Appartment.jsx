import {useState, useEffect} from 'react'
// import {cards} from './Cards'
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import Afternav from './Afternav';
// import Dbcards from '../components/Dbcards';
// import AfterAtt from '../components/AfterAtt';
// import useFetch from '../components/useFetch';
import axios from 'axios';
import Dropdown2 from './Dropdown2';

const Appartment=()=>{
    const [filter, setFilter] = useState('All');
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:7000/dbdata');
        const result = await response.json();
        setEvents(result);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredEvents = filter === 'All' ? events.slice(12,16): events.filter(event => event.type === filter);
    return (
        <div>
        <div>
       
        <div>
        <div className="relative bg-cover bg-center min-h-[6rem]">
    <div className=" bg-contain bg-no-repeat w-[100%] min-h-[6rem] lg:bg-cover lg:min-h-[23rem] lg:w-full lg:bg-center">
        <img src="/images/work.png" alt="" />
    </div>
</div>

{/* // <!-- Body --> */}

<div className="container mx-auto px-4 py-12">
    <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex items-center gap-1">
            <h2 className="lg:text-[1.8rem] text-xl font-bold lg:font-semibold ">APPARTMENTS</h2>
            <Dropdown2/>
        </div>
        
    </div>

    </div>
    </div>
   
{/* BACKEND SIDE */}
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        {['All',  '4+ Rating', 'Price','Amenities','Property type','Parties'].map(type => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-lg ${filter === type ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-800'}`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-gray-100 border border-gray-200 rounded-lg overflow-hidden">
            <img src={event.image1} alt={event.title} className="w-full min-h-48 object-cover lg:p-4" />
            <div className="p-4">
              <h3 className="text-[1rem] lg:text-xl font-bold text-gray-800 pb-2">{event.title}</h3>
              <p className="text-[.75rem] lg:text-[1rem] text-gray-600 pb-1">{event.address}</p>
              <p className="text-[.75rem] lg:text-[1rem] text-gray-600">{event.date}</p>
              <div className="flex items-center justify-between mt-4">
                <a href="details.html" className="bg-green-200 text-green-600 px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg hover:text-green-700 text-[.75rem] lg:text-[1rem]">More Info</a>
                <a href="#" className="bg-green-700 text-white px-2 py-[.4rem] lg:px-4 lg:py-2 rounded-lg text-[.75rem] lg:text-[1rem]">Get Directions</a>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>

 <Footer/>
        </div>
        
         

    )
}
export default Appartment;
