const Footer =()=>{
    return(
        <footer className="bg-black text-white py-8 px-4">
    <div className="container mx-auto flex flex-col lg:flex-row justify-between gap-[2rem] items-center min-h-[5rem]">
        <div>
            <img src="/images/logo.png" alt="j-city logo" className="w-[5rem] h-[6rem] lg:w-[8rem] lg:h-[9rem] "/>
        </div>
        <div>
            <h3 className="text-[1rem] lg:text-xl font-medium text-green-600">J CITY TOUR GUIDE</h3>
            <ul className="mt-4 space-y-2 text-center lg:text-left text-[.8rem] lg:text-[1rem]">
                <li><a href="current_events.html" className="hover:underline">NOW IN JOS</a></li>
                <li><a href="accomodation.html" className="hover:underline">ACCOMMODATION</a></li>
                <li><a href="shopping.html" className="hover:underline">RESTAURANTS</a></li>
                <li><a href="shopping.html" className="hover:underline">SHOPPING</a></li>
                <li><a href="#" className="hover:underline">HOSPITALS</a></li>
            </ul>
        </div>
        <div>
            <ul className="lg:mt-[-3rem] space-y-2 text-[.8rem] lg:text-[1rem]">
                <li><a href="#" className="hover:underline">FAQS</a></li>
                <li><a href="#" className="hover:underline">HELP</a></li>
            </ul>
        </div>
        <div className=" lg:mt-[-7rem] space-y-4">
            <h3 className="text-[1rem] lg:text-xl font-medium text-green-600">STAY IN TOUCH</h3>
            <div className="flex space-x-4 pb-[1.5rem] justify-center">
                <a href="#"><img src="/images/lucide_facebook.png" alt="Facebook" className="h-6"/></a>
                <a href="#"><img src="/images/fa-brands_instagram.png" alt="Instagram" className="h-6"/></a>
                <a href="#"><img src="/images/mage_x.png" alt="Twitter" className="h-6"/></a>
            </div>
        </div>
    </div>
    <div className="text-center text-[.9rem] pt-[1rem] lg:float-right">
        <p>© 2024 J City Tour Guide. All rights reserved.</p>
    </div>
</footer>
        
    )
}
export default Footer;