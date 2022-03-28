function EventDetailsWithDay() {
    return (
        <section className="leading-relaxed text-gray-900 lg:bg-white overflow-x-hidden mt-10 xl:mt-12 pb-28">
          
            {/*Banner*/}
            <div style={{backgroundImage: "url(/event/bg-events.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
            className="w-full h-[34em] xl:h-[40em] 2xl:h-[40em]">
                <img className="absolute w-full h-[34em] xl:h-[40em] 2xl:h-[40em]" src="/event/gradien.png" alt="" />        
                <div className="relative flex flex-col w-[90%] 2xl:w-[90%] text-center text-gray-900 align-center justify-center gap-8 xl:gap-16 mb-5 xl:mb-8 mx-auto">
                    <div>
                    <h1 className="font-normal text-[#23552E] text-2xl xl:text-3xl 2xl:text-4xl mt-10">Our Speakers :</h1>
                    </div>
                    <div className="flex flex-row items-center justify-center gap-12 xl:gap-28">
                        <div className="flex flex-col items-center text-center gap-4 xl:gap-4">
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
                    <div className="">
                        <h1 className="font-medium  text-4xl xl:text-5xl xl:-mt-5 2xl:text-5xl text-[#39325F]">Start Your Machine Learning</h1>
                        <h3 className="font-medium text-lg xl:text-xl mt-4 2xl:text-2xl text-[#39325F]">28 March 2022, 10.00 AM</h3>
                    </div>
                </div>                    
            </div>
            {/*End of Banner*/}

            {/*Event details */}
            <div className="ml-24 2xl:ml-28">
                <div className="font-medium mt-14 mb-6 text-3xl xl:text-4xl 2xl:text-4xl">
                    <h1 className="">Start Your Machine Learning</h1>
                </div>
                <div className="flex flex-row">
                    <div className="flex flex-col w-2/3 pr-20 text-justify text-base xl:text-lg 2xl:text-xl text-gray-800">
                        <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et duis nibh velit ultrices adipiscing id diam. In libero gravida sed vestibulum, justo sollicitudin volutpat. Nunc, sed feugiat elit augue. Sit maecenas ac, semper volutpat tincidunt quis nisi. Rhoncus rhoncus feugiat dictum mauris facilisi in. Lectus tortor dignissim enim aliquam aliquam id eu a, fringilla. Augue non consectetur dictumst tristique amet </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et duis nibh velit ultrices adipiscing id diam. In libero gravida sed vestibulum, justo sollicitudin volutpat. Nunc, sed feugiat elit augue. Sit maecenas ac, semper volutpat tincidunt quis nisi. Rhoncus rhoncus feugiat dictum mauris facilisi in. Lectus tortor dignissim enim aliquam aliquam id eu a, fringilla. Augue non consectetur dictumst tristique amet Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et duis nibh velit ultrices adipiscing id diam. In libero gravida sed vestibulum, justo sollicitudin volutpat. Nunc, sed feugiat elit augue. Sit maecenas ac, semper volutpat tincidunt quis nisi. Rhoncus rhonc  us feugiat dictum mauris facilisi in. Lectus tortor dignissim enim aliquam aliquam id eu a, fringilla. Augue non consectetur dictumst tristique amet</p>
                    </div>
                    <div className="flex flex-col w-1/4 border-2 border-black rounded-md h-2/3 ml-8 -mt-7">
                        <div className="text-base xl:text-lg 2xl:text-xl pl-5 pt-6 pb-8">
                            <h2 className="font-bold pb-3">Date:</h2>
                            <h3 className="font-normal text-[#545454] mb-9">28 March 2021</h3>
                            <h2 className="font-bold pb-3">Time:</h2>
                            <h3 className="font-normal text-[#545454]">10.00 AM GMT</h3>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="w-64 xl:w-64 2xl:w-72 mt-10 py-2 text-lg xl:text-base font-medium text-white tracking-wide bg-[#4285F4] hover:bg-[#4285F4]/90 transition rounded-md">
                        Register
                    </button>
                </div>
            </div>
            {/*End of event details*/}

            {/*Speakers */}
            <div className="relative justify-between items-center">
                <div className="absolute left-0 top-80">
                    <img className="w-20 -mt-10 xl:mt-0 2xl:mt-6 xl:w-24 2xl:w-32" src="/event/twoRing.svg" alt="hiasan"/>
                </div>
                <div className="absolute right-0 top-28">
                    <img className="w-20 xl:w-22 2xl:w-32" src="/event/halfRing.png" alt="hiasan"/>
                </div>
                <div className="text-center mt-24">
                    <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-10 xl:mb-14">Speakers</h2>
                    <div className="flex justify-center space-x-28 xl:space-x-52">
                        <div className="xl:tracking-wide">
                            <img src="/event/gerald.png" alt=""
                            className="w-48 h-48 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-cover rounded-full"/>
                            <p className="text-lg xl:text-xl 2xl:text-xl font-bold mt-4 mb-1 tracking-wider xl:tracking-normal">Gerald Plakasa</p>
                            <p className="text-base text-gray-800">Core team of Machine Learning</p>
                            <p className="text-base text-gray-800">GDSC Sriwijaya University</p>
                        </div>
                        <div className="xl:tracking-wide">
                            <img src="/event/galuh.png" alt=""
                                className="w-48 h-48 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-cover rounded-full"/>
                            <p className="text-lg xl:text-xl 2xl:text-xl font-bold mt-4 mb-1 tracking-wider xl:tracking-normal">Galuh Sahid</p>
                            <p className="text-base text-gray-800">Google Developer Expert</p>
                            <p className="text-base text-gray-800">in Machine Learning</p>
                        </div>
                        <div className="xl:tracking-wide">
                            <img src="/event/ferza.png" alt=""
                                className="w-48 h-48 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-cover rounded-full"/>
                            <p className="text-lg xl:text-xl 2xl:text-xl font-bold mt-4 mb-1 tracking-wider xl:tracking-normal">Ferza Reyaldi</p>
                            <p className="text-base text-gray-800">Lead</p>
                            <p className="text-base text-gray-800">GDSC Sriwijaya University</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Speaker */}

            {/*Fasilitator */}
            <div className="relative justify-between items-center">
                <div className="absolute right-0 top-28">
                    <img className="w-20 xl:w-22 2xl:w-32" src="/event/halfRing2.png" alt="hiasan"/>
                </div>
                <div className="text-center mt-36">
                    <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-10 xl:mb-14">Fasilitators</h2>
                    <div className="flex justify-center space-x-28 xl:space-x-52">
                        <div className="xl:tracking-wide">
                            <img src="/event/gerald.png" alt=""
                            className="w-48 h-48 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-cover rounded-full"/>
                            <p className="text-lg xl:text-xl 2xl:text-xl font-bold mt-4 mb-1 tracking-wider xl:tracking-normal">Gerald Plakasa</p>
                            <p className="text-base text-gray-800">Core team of Machine Learning</p>
                            <p className="text-base text-gray-800">GDSC Sriwijaya University</p>
                        </div>
                        <div className="xl:tracking-wide">
                            <img src="/event/ridho.png" alt=""
                                className="w-48 h-48 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-cover rounded-full"/>
                            <p className="text-lg xl:text-xl 2xl:text-xl font-bold mt-4 mb-1 tracking-wider xl:tracking-normal">Ridho Weedy</p>
                            <p className="text-base text-gray-800">Co-Lead</p>
                            <p className="text-base text-gray-800">GDSC Sriwijaya University</p>
                        </div>
                        <div className="xl:tracking-wide">
                            <img src="/event/ferza.png" alt=""
                                className="w-48 h-48 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-cover rounded-full"/>
                            <p className="text-lg xl:text-xl 2xl:text-xl font-bold mt-4 mb-1 tracking-wider xl:tracking-normal">Ferza Reyaldi</p>
                            <p className="text-base text-gray-800">Lead</p>
                            <p className="text-base text-gray-800">GDSC Sriwijaya University</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*End Of Fasilitator */}                
        </section>        
    
    );
}

export default EventDetailsWithDay;