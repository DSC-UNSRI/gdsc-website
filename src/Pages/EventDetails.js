import {Link} from "react-router-dom";

function EventDetails() {
   return (
        <section className="w-screen leading-relaxed text-gray-900 lg:bg-white overflow-x-hidden mt-10 xl:mt-12 pb-24">

            {/*Banner*/}
            <div style={{backgroundImage: "url(/event/bg-events.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
            className="w-full h-[36em] xl:h-[42em] 2xl:h-[42em] ">
                
                <div className="relative flex flex-col w-[90%] 2xl:w-[90%] text-center text-gray-900 align-center justify-center gap-8 xl:gap-16 mb-5 xl:mb-8 mx-auto">
                    <div className="absolute left-0 items-center">
                        <img src="/event/left.png" className="w-6 xl:w-7 2xl:w-8"/>
                    </div>
                    <div className="absolute right-0 items-center">
                        <img src="/event/right.png" className="w-6 xl:w-7 2xl:w-8"/>
                    </div>
                    <div>
                    <h1 className="font-normal mt-8 text-[#23552E] text-2xl xl:text-3xl 2xl:text-4xl xl:mt-10 2xl:mt-10">Our Speakers :</h1>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-12 xl:gap-28 xl:-mt-5 2xl:-mt-6">
                        <div className="flex flex-col items-center text-center gap-4 xl:gap-4 ">
                            <img className="lg:w-56 xl:w-64 2xl:w-64" src="/event/circle.png" alt="" />
                            <span className="flex flex-col w-[80%] items-center gap-2 xl:gap-2">
                                <h3 className="font-semibold text-xl xl:text-2xl text-gray-700">Gerald Plakasa</h3>
                            </span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4 xl:gap-4">
                            <img className="lg:w-56 xl:w-64 2xl:w-64" src="/event/circle.png" alt="" />
                            <span className="flex flex-col w-[80%] items-center gap-2 xl:gap-2">
                                <h3 className="font-semibold text-xl xl:text-2xl text-gray-700">Ferza Reyaldi</h3>
                            </span>
                        </div>
                        <div className="flex flex-col items-center text-center gap-4 xl:gap-4">
                            <img className="lg:w-56 xl:w-64 2xl:w-64" src="/event/circle.png" alt="" />
                            <span className="flex flex-col w-[80%] items-center gap-2 xl:gap-2">
                                <h3 className="font-semibold text-xl xl:text-2xl text-gray-700">Galuh Sahid</h3>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col font-medium xl:-mt-6 items-center">
                        <h1 className="text-4xl xl:text-5xl 2xl:text-5xl text-[#39325F]">Start Your Machine Learning</h1>
                        <h3 className="text-lg xl:text-xl mt-4 2xl:text-2xl text-[#39325F]">28 March 2022, 10.00 AM</h3>
                    </div>                 
                    <div className="flex flex-col relative items-center py-2 xl:-mt-7">
                        <img className="w-20 xl:w-24 2xl:w-32" src="/event/point.png" alt=""/>    
                    </div>    
                </div>    

            </div> 
            <div className="bg-[#373737] py-4 2xl:py-5">
                <h3 className="text-white text-center text-lg xl:text-xl 2xl:text-2xl">Upcoming Events</h3>
            </div>
            {/*End of Banner*/}

            {/*Events*/}
            <div className="mx-24 2xl:mx-28 mt-16 items-center justify-between relative gap-8 xl:gap-16 mb-5 xl:mb-8">
                <div className=" pb-16 xl:pb-20 2xl:pb-24">
                    <Link to="/events/event-details/machine-learning">
                    <div className="flex flex-row text-gray-800">
                        <div className="flex flex-col justify-start pr-6  text-center">
                            <h3 className="font-medium text-lg xl:text-xl 2xl:text-2xl">March</h3>
                            <h1 className="font-bold text-4xl xl:text-5xl 2xl:text-5xl">26</h1>
                        </div>
                        <div className="flex flex-col w-4/5 items-center xl:-ml-4 2xl:-ml-6 relative overflow-hidden after:absolute after:w-full after:h-full
                    after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:pr-16 after:2xl:pr-10 
                        after:duration-500 after:content-['View_Detail'] after:text-center after:justify-center after:xl:text-xl after:pt-[25%] after:xl:pt-[22%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                            <img src="/event/webinar1.png" alt=""
                            className="py-4 w-full xl:w-5/6 2xl:w-4/5 pr-16 2xl:pr-10 object-cover transition duration-300 delay-150 group-hover:scale-100"/>
                        </div>
                        <div className="flex flex-col w-3/5 justify-start text-justify py-2 2xl:ml-10">
                            <h2 className="font-semibold text-xl xl:text-2xl 2xl:text-3xl hover:underline">Start Your Machine Learning</h2>
                            <h3 className="font font-medium text-sm xl:text-base 2xl:text-lg pb-4">Machine Learning</h3>
                            <p className="lg:text-sm xl:text-base 2xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et duis nibh velit ultrices adipiscing id diam. In libero gravida sed vestibulum, justo sollicitudin volutpat. Nunc, sed feugiat elit augue. Sit maecenas ac, semper volutpat tincidunt quis nisi. Rhoncus rhoncus feugiat dictum mauris facilisi in. Lectus tortor dignissim enim aliquam aliquam id eu a, fringilla. Augue non consectetur dictumst tristique amet...</p>
                            <p className="text-[#B3B3B3] text base 2xl:text-lg"> learn more</p>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className=" pb-16 xl:pb-20 2xl:pb-24">
                    <Link to="/events/event-details/machine-learning">
                    <div className="flex flex-row text-gray-800">
                        <div className="flex flex-col justify-start pr-6  text-center">
                            <h3 className="font-medium text-lg xl:text-xl 2xl:text-2xl">March</h3>
                            <h1 className="font-bold text-4xl xl:text-5xl 2xl:text-5xl">26</h1>
                        </div>
                        <div className="flex flex-col w-4/5 items-center xl:-ml-4 2xl:-ml-6 relative overflow-hidden after:absolute after:w-full after:h-full
                    after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:pr-16 after:2xl:pr-10 
                        after:duration-500 after:content-['View_Detail'] after:text-center after:justify-center after:xl:text-xl after:pt-[25%] after:xl:pt-[22%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                            <img src="/event/webinar1.png" alt=""
                            className="py-4 w-full xl:w-5/6 2xl:w-4/5 pr-16 2xl:pr-10 object-cover transition duration-300 delay-150 group-hover:scale-100"/>
                        </div>
                        <div className="flex flex-col w-3/5 justify-start text-justify py-2 2xl:ml-10">
                            <h2 className="font-semibold text-xl xl:text-2xl 2xl:text-3xl hover:underline">Start Your Machine Learning</h2>
                            <h3 className="font font-medium text-sm xl:text-base 2xl:text-lg pb-4">Machine Learning</h3>
                            <p className="lg:text-sm xl:text-base 2xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et duis nibh velit ultrices adipiscing id diam. In libero gravida sed vestibulum, justo sollicitudin volutpat. Nunc, sed feugiat elit augue. Sit maecenas ac, semper volutpat tincidunt quis nisi. Rhoncus rhoncus feugiat dictum mauris facilisi in. Lectus tortor dignissim enim aliquam aliquam id eu a, fringilla. Augue non consectetur dictumst tristique amet...</p>
                            <p className="text-[#B3B3B3] text base 2xl:text-lg"> learn more</p>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className=" pb-16 xl:pb-20 2xl:pb-24">
                    <Link to="/events/event-details/machine-learning">
                    <div className="flex flex-row text-gray-800">
                        <div className="flex flex-col justify-start pr-6  text-center">
                            <h3 className="font-medium text-lg xl:text-xl 2xl:text-2xl">March</h3>
                            <h1 className="font-bold text-4xl xl:text-5xl 2xl:text-5xl">26</h1>
                        </div>
                        <div className="flex flex-col w-4/5 items-center xl:-ml-4 2xl:-ml-6 relative overflow-hidden after:absolute after:w-full after:h-full
                    after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:pr-16 after:2xl:pr-10 
                        after:duration-500 after:content-['View_Detail'] after:text-center after:justify-center after:xl:text-xl after:pt-[25%] after:xl:pt-[22%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                            <img src="/event/webinar1.png" alt=""
                            className="py-4 w-full xl:w-5/6 2xl:w-4/5 pr-16 2xl:pr-10 object-cover transition duration-300 delay-150 group-hover:scale-100"/>
                        </div>
                        <div className="flex flex-col w-3/5 justify-start text-justify py-2 2xl:ml-10">
                            <h2 className="font-semibold text-xl xl:text-2xl 2xl:text-3xl hover:underline">Start Your Machine Learning</h2>
                            <h3 className="font font-medium text-sm xl:text-base 2xl:text-lg pb-4">Machine Learning</h3>
                            <p className="lg:text-sm xl:text-base 2xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et duis nibh velit ultrices adipiscing id diam. In libero gravida sed vestibulum, justo sollicitudin volutpat. Nunc, sed feugiat elit augue. Sit maecenas ac, semper volutpat tincidunt quis nisi. Rhoncus rhoncus feugiat dictum mauris facilisi in. Lectus tortor dignissim enim aliquam aliquam id eu a, fringilla. Augue non consectetur dictumst tristique amet...</p>
                            <p className="text-[#B3B3B3] text base 2xl:text-lg"> learn more</p>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className=" pb-16 xl:pb-20 2xl:pb-24">
                    <Link to="/events/event-details/machine-learning">
                    <div className="flex flex-row text-gray-800">
                        <div className="flex flex-col justify-start pr-6  text-center">
                            <h3 className="font-medium text-lg xl:text-xl 2xl:text-2xl">March</h3>
                            <h1 className="font-bold text-4xl xl:text-5xl 2xl:text-5xl">26</h1>
                        </div>
                        <div className="flex flex-col w-4/5 items-center xl:-ml-4 2xl:-ml-6 relative overflow-hidden after:absolute after:w-full after:h-full
                    after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:pr-16 after:2xl:pr-10 
                        after:duration-500 after:content-['View_Detail'] after:text-center after:justify-center after:xl:text-xl after:pt-[25%] after:xl:pt-[22%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                            <img src="/event/webinar1.png" alt=""
                            className="py-4 w-full xl:w-5/6 2xl:w-4/5 pr-16 2xl:pr-10 object-cover transition duration-300 delay-150 group-hover:scale-100"/>
                        </div>
                        <div className="flex flex-col w-3/5 justify-start text-justify py-2 2xl:ml-10">
                            <h2 className="font-semibold text-xl xl:text-2xl 2xl:text-3xl hover:underline">Start Your Machine Learning</h2>
                            <h3 className="font font-medium text-sm xl:text-base 2xl:text-lg pb-4">Machine Learning</h3>
                            <p className="lg:text-sm xl:text-base 2xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et duis nibh velit ultrices adipiscing id diam. In libero gravida sed vestibulum, justo sollicitudin volutpat. Nunc, sed feugiat elit augue. Sit maecenas ac, semper volutpat tincidunt quis nisi. Rhoncus rhoncus feugiat dictum mauris facilisi in. Lectus tortor dignissim enim aliquam aliquam id eu a, fringilla. Augue non consectetur dictumst tristique amet...</p>
                            <p className="text-[#B3B3B3] text base 2xl:text-lg"> learn more</p>
                        </div>
                    </div>
                    </Link>
                </div>
            
            </div>
            {/*End of Events*/}              
        </section>
    );
}

export default EventDetails;