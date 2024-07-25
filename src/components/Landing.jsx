
import {useState, useEffect} from 'react'
// import {cards} from './Cards'
// import Navbar from './Navbar';
import Footer from './Footer';
// import Header from './Header';
import { Link } from 'react-router-dom';

const Landing =()=>{
   
    
    return(
        <>
       
     <div>
     <section className="relative bg-cover bg-center min-h-[6rem]">
        
     <div className="relative bg-cover bg-center min-h-[6rem]">
    <div className=" bg-contain bg-no-repeat w-[100%] min-h-[6rem] lg:bg-cover lg:min-h-[23rem] lg:w-full lg:bg-center">
        <img src="/images/pic.png" alt="" />
    </div>
</div>
        <div className="container mx-auto relative z-10 flex justify-center items-center h-full">
            <div className="text-center text-black px-[1rem]">
                <h1 className="lg:text-4xl text-xl font-semibold leading-[auto] pt-[3rem]">DON'T WASTE A MINUTE!</h1>
                <p className="mt-4 lg:text-[1.125rem] text-[.9rem]">Explore <span className="text-green-500">beautiful</span> attractions and enjoy all the <span className="text-green-500">fun</span> activities that Jos City has for you.</p>
            </div>
        </div>
    </section>


    <section className="py-12  px-[1rem]">
        <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center gap-6 min-h-[20%]">
                    <img src="/images/Frame 43 (1).png" alt="Rayfield Resort" className="rounded-lg shadow-md overflow-hidden w-[100%] h-[100%] object-cover"/>
                    <img src="/images/Frame 46.png " alt="Asop Water Falls" className="rounded-lg shadow-md overflow-hidden w-[100%] h-[100%] object-cover"/>
                    <img src="/images/Frame 45.png" alt="Play Station" className="rounded-lg shadow-md overflow-hidden w-[100%] h-[100%] object-cover"/>
            </div>
            </div>
            <div className="text-center mt-8">
                <Link to="/see" className="inline-block bg-green-600 font-semibold text-[.95rem] text-white py-2 px-10 rounded">See All</Link>
            </div>
    </section>


    <section className="py-12 bg-gray-50  px-[1rem]">
        <div className="container mx-auto text-center">
            <h2 className="lg:text-4xl text-xl font-bold">SAVOUR JOS</h2>
            <p className="mt-4 lg:text-center text-center">Whether you're looking for neighborhood eateries or cultural flavors, finding a delicious experience in any part of Jos City has been made almost effortless.</p>
        </div>
        <div className="container mx-auto mt-8 flex flex-col">
            <div className="bg-white rounded-lg flex flex-col lg:flex-row shadow-md overflow-hidden h-[23rem] lg:h-[25rem] lg:w-[82%] lg:mx-auto">
                <img src="/images/Frame 43.png" alt="Bacardi Restaurant and Cafe" className=" lg:p-[2rem] p-[1rem]"/>
                <div className="p-4">
                    <h2 className="text-[1rem] lg:text-2xl font-semibold lg:pt-[6rem]">Bacardi Restaurant and Cafe</h2>
                    <p className="pt-[1rem] lg:pt-[1.8rem] text-[.8rem] lg:text-[1rem]">11 Dandaura Road, Off Wase Road, GRA, Jos, Plateau</p>
                    <div className="pt-[1.8rem] lg:pt-[5rem] pb-[1.5rem]">
                        <a href="#" className="cursor-pointer bg-green-600 px-6 py-2 text-white text-[.8rem] lg:text-[1rem] font-semibold rounded-md">View Details</a>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <Link to ="/see" className="inline-block bg-green-600 font-semibold text-[.95rem] text-white py-2 px-10 rounded">See All</Link>
            </div>
        </div>
    </section>

  
    <section className="py-12  px-[1rem]">
        <div className="container mx-auto text-center">
            <h2 className="lg:text-4xl text-xl font-bold">EXPLORE UPCOMING EVENTS</h2>
            <p className="mt-4">Stay up to date on current and upcoming events that will spice up your stay.</p>
        </div>
        <div className="container mx-auto mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <img src="/images/Frame 28.png"/>
                        <h2 className="text-[1rem] lg:text-xl font-semibold pt-6">CoLab Jos Intro Meetup</h2>
                        <p className="mt-2 text-[.7rem] lg:text-[1rem]">NASCO MARKETING COMPANY LTD</p>
                        <div className="flex justify-between pt-[1rem]">
                            <p className="mt-2 text-[.7rem] font-semibold lg:text-[1rem]">SAT, 29 JUNE</p>
                            <a href="#" className="inline-block bg-green-600 text-white text-[.6rem] lg:text-[1rem] font-semibold py-2 px-3 rounded">View Details</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <img src="/images/Frame 28.png"/>
                        <h2 className="text-[1rem] lg:text-xl font-semibold pt-6">CoLab Jos Intro Meetup</h2>
                        <p className="mt-2 text-[.7rem] lg:text-[1rem]">NASCO MARKETING COMPANY LTD</p>
                        <div className="flex justify-between pt-[1rem]">
                            <p className="mt-2 text-[.7rem] font-semibold lg:text-[1rem]">SAT, 29 JUNE</p>
                            <a href="#" className="inline-block bg-green-600 text-white text-[.6rem] lg:text-[1rem] font-semibold py-2  px-3 rounded">View Details</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <a href="#" className="inline-block bg-green-600 text-white py-2 px-16 font-semibold text-[.95rem] rounded-md">See All </a>
            </div>
        </div>
    </section>
     </div>
    <Footer/>



        </>
    )
}
export default Landing;