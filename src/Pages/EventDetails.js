import {Link} from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

function EventDetails() {
   return (
        <section className="w-screen leading-relaxed text-gray-900 lg:bg-white overflow-x-hidden pb-24">
            {/*Banner*/}
            <Carousel showArrows showIndicators infiniteLoop swipeable dynamicHeight useKeyboardArrows showStatus={false} showThumbs={false}>
                <div>
                    <img src="/placeholder-carousel.png"/>
                </div>
                <div>
                    <img src="/placeholder-carousel.png"/>
                </div>
                <div>
                    <img src="/placeholder-carousel.png"/>
                </div>
                <div>
                    <img src="/placeholder-carousel.png"/>
                </div>
                <div>
                    <img src="/placeholder-carousel.png"/>
                </div>
            </Carousel>
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