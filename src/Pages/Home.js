import {Link} from "react-router-dom";

function Home() {
    return (
        <main
            className="w-screen leading-relaxed text-gray-900 md:bg-amber-300 lg:bg-white overflow-x-hidden mt-16 pb-24">
            {/*Hero*/}
            <div style={{backgroundImage: "url(/bg-home.png)", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}
                 className="w-full h-[24em] xl:h-[36em] 2xl:h-[42em]">
                <div className="flex justify-between items-center px-28 xl:px-36 2xl:px-52 h-full tracking-wide">
                    <div className="w-3/5 space-y-5 xl:space-y-8">
                        <h1 className="font-bold text-4xl xl:text-5xl 2xl:text-6xl leading-tight">Google
                            Developer <br/> Student
                            Club</h1>
                        <h2 className="font-bold text-lg xl:text-xl 2xl:text-2xl text-gray-800">Chapter of Sriwijaya
                            University</h2>
                        <button
                            className="mt-4 px-4 py-1.5 xl:px-5 2xl:px-7 2xl:py-1 text-sm xl:text-base font-medium text-white tracking-wide bg-[#4285F4] hover:bg-[#4285F4]/90 transition rounded-md ">
                            Learn More
                        </button>
                    </div>
                    <div>
                        <img src="/dummy.png" alt=""
                             className="w-[24em] xl:w-[32em] 2xl:w-[42em] lg:h-56 xl:h-80 2xl:h-96 rounded-3xl object-cover"/>
                    </div>
                </div>
            </div>
            {/*End of Hero*/}
            {/*Description*/}
            <div className="mt-12 px-20 xl:px-28">
                <div className="relative">
                    <div className="absolute right-[-100px] top-[-60px]">
                        <img className="w-[36em] xl:w-[56em]" src="/hiasan.png" alt="hiasan"/>
                    </div>
                    <div className="w-2/5 xl:w-2/6 mb-8">
                        <h4 className="text-md xl:text-lg font-bold mb-3 text-[#4285F4]">Get In Touch with Us</h4>
                        <p className="text-sm xl:text-base text-gray-800">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper diam vitae
                            consectetur
                            mollis. Phasellus iaculis metus non diam mollis, vitae malesuada lorem dapibus.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <div className="w-1/2">
                        <h2 className="text-lg xl:text-xl font-bold mb-3">Mission and Values</h2>
                        <p className="text-sm xl:text-base text-gray-800">
                            Google Developer Student Clubs (GDSC) are community groups for college and university
                            students
                            interested in Google developer technologies. Students from all undergraduate or graduate
                            programs with an interest in growing as a developer are welcome. By joining a GDSC, students
                            grow their knowledge in a peer-to-peer learning environment and build solutions for local
                            businesses and their community.
                        </p>
                    </div>
                    <div className="xl:w-1/3 lg:w-2/5">
                        <img src="/dummy.png" alt="mission-and-values" className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-16 relative z-10">
                    <div className="xl:w-1/3 lg:w-2/5">
                        <img src="/dummy.png" alt="benefits" className="w-full h-full object-cover"/>
                    </div>
                    <div className="w-1/2 pl-[15%]">
                        <h2 className="text-lg xl:text-xl font-bold mb-3">Benefits of joining our programs</h2>
                        <div className="pl-8">
                            <ul className="list-disc text-sm xl:text-base text-gray-800">
                                <li>Expert speakers</li>
                                <li>Gain IT Relationship</li>
                                <li>Improve your skills</li>
                                <li>Try the demo practically online</li>
                                <li>Get Certificate</li>
                            </ul>

                        </div>
                        <Link to="/about">
                            <button
                                className="mt-4 px-3 py-1.5 xl:px-5 2xl:px-5 2xl:py-1  text-sm xl:text-base font-medium text-white tracking-wide bg-[#4285F4] hover:bg-[#4285F4]/90 transition rounded-md ">
                                Join Our Community
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
            {/*  End of Description  */}
            {/*  Lead & Co-Lead  */}
            <div className="relative">
                <div className="absolute left-[-42px] top-[-200px] z-0">
                    <img className="w-40 xl:w-52 2xl:w-64" src="/ornament-1.png" alt="hiasan"/>
                </div>
                <div className="absolute right-[-42px] top-0 z-0">
                    <img className="w-40 xl:w-52 2xl:w-60" src="/ornament-2.png" alt="hiasan"/>
                </div>
                <div className="text-center mt-32">
                    <h2 className="text-xl xl:text-2xl 2xl:text-3xl font-bold mb-10 xl:mb-14">Meet Our Leader and
                        Co-Leader</h2>
                    <div className="flex justify-center space-x-36 xl:space-x-52">
                        <div className="xl:tracking-wide">
                            <img src="/ferza.jpg" alt="Ferza Reyaldi"
                                 className="w-48 h-48 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-cover rounded-full"/>
                            <p className="mt-5 text-base xl:text-lg font-bold mt-5 mb-1 tracking-wider xl:tracking-normal">Ferza
                                Reyaldi</p>
                            <p className="text-sm text-gray-800">Sriwijaya University</p>
                            <p className="text-sm text-gray-800">GDSC Lead</p>
                        </div>
                        <div className="xl:tracking-wide">
                            <img src="/ferza.jpg" alt="Ferza Reyaldi"
                                 className="w-48 h-48 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60 object-cover rounded-full"/>
                            <p className="mt-5 text-base xl:text-lg font-bold mt-5 mb-1 tracking-wider xl:tracking-normal">Ferza
                                Reyaldi</p>
                            <p className="text-sm text-gray-800">Sriwijaya University</p>
                            <p className="text-sm text-gray-800">GDSC Lead</p>
                        </div>
                    </div>
                    <Link to="/members">
                        <button
                            className="mt-12 px-4 py-1.5 xl:px-5 2xl:px-7 2xl:py-1 text-sm xl:text-base font-medium text-white tracking-wide bg-[#4285F4] hover:bg-[#4285F4]/90 transition rounded-md ">
                            View More
                        </button>
                    </Link>
                </div>
            </div>
            {/*  End of Lead & Co-Lead  */}
            {/*  Our Activity  */}
            <div className="mt-24 px-20 xl:px-28">
                <div className="flex items-end">
                    <h2 className="text-xl xl:text-2xl 2xl:text-3xl text-[#0F9D58] font-medium">Our Activity</h2>
                    <Link to="/events">
                        <p className="text-sm xl:text-base font-medium text-gray-600 hover:text-gray-800 transition ml-2 xl:ml-3">More <span className="text-xs"></span> </p>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-between items-center mt-5">
                    {/*Item*/}
                    <div className="mb-12">
                        <Link to="/events/cracking-coding-interview">
                            <div className="group w-80 h-44 xl:w-96 xl:h-52 2xl:w-[25rem] xl:h-56 relative overflow-hidden rounded-xl after:absolute after:w-full after:h-full
                            after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:duration-500 after:content-['View_Detail'] after:text-center after:pt-[25%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                                <img src="/webinar.jpg" alt=""
                                     className="w-full h-full object-cover  transition duration-300 delay-150 scale-105  group-hover:scale-100"/>
                            </div>
                            <div className="mt-5 space-y-1">
                                <h4 className="text-lg xl:text-xl font-medium hover:underline">Cracking Coding Interview</h4>
                                <p className="text-sm xl:text-base">Agus Sentosa Hermawan</p>
                                <div className="flex items-center space-x-1.5">
                                    <p className="text-xs xl:text-sm text-gray-600">March 6, 2022</p>
                                    <span className="w-1 h-1 inline-block rounded-full bg-[#0F9D58]"/>
                                    <p className="text-xs xl:text-sm text-[#0F9D58]">Webinar</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/*  End of Item  */}
                    {/*Item*/}
                    <div className="mb-12">
                        <Link to="/events/cracking-coding-interview">
                            <div className="group w-80 h-44 xl:w-96 xl:h-52 2xl:w-[25rem] xl:h-56 relative overflow-hidden rounded-xl after:absolute after:w-full after:h-full
                            after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:duration-500 after:content-['View_Detail'] after:text-center after:pt-[25%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                                <img src="/webinar.jpg" alt=""
                                     className="w-full h-full object-cover  transition duration-300 delay-150 scale-105  group-hover:scale-100"/>
                            </div>
                            <div className="mt-5 space-y-1">
                                <h4 className="text-lg xl:text-xl font-medium hover:underline">Cracking Coding Interview</h4>
                                <p className="text-sm xl:text-base">Agus Sentosa Hermawan</p>
                                <div className="flex items-center space-x-1.5">
                                    <p className="text-xs xl:text-sm text-gray-600">March 6, 2022</p>
                                    <span className="w-1 h-1 inline-block rounded-full bg-[#0F9D58]"/>
                                    <p className="text-xs xl:text-sm text-[#0F9D58]">Webinar</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/*  End of Item  */}
                    {/*Item*/}
                    <div className="mb-12">
                        <Link to="/events/cracking-coding-interview">
                            <div className="group w-80 h-44 xl:w-96 xl:h-52 2xl:w-[25rem] xl:h-56 relative overflow-hidden rounded-xl after:absolute after:w-full after:h-full
                            after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:duration-500 after:content-['View_Detail'] after:text-center after:pt-[25%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                                <img src="/webinar.jpg" alt=""
                                     className="w-full h-full object-cover  transition duration-300 delay-150 scale-105  group-hover:scale-100"/>
                            </div>
                            <div className="mt-5 space-y-1">
                                <h4 className="text-lg xl:text-xl font-medium hover:underline">Cracking Coding Interview</h4>
                                <p className="text-sm xl:text-base">Agus Sentosa Hermawan</p>
                                <div className="flex items-center space-x-1.5">
                                    <p className="text-xs xl:text-sm text-gray-600">March 6, 2022</p>
                                    <span className="w-1 h-1 inline-block rounded-full bg-[#0F9D58]"/>
                                    <p className="text-xs xl:text-sm text-[#0F9D58]">Webinar</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/*  End of Item  */}
                    {/*Item*/}
                    <div className="mb-12">
                        <Link to="/events/cracking-coding-interview">
                            <div className="group w-80 h-44 xl:w-96 xl:h-52 2xl:w-[25rem] xl:h-56 relative overflow-hidden rounded-xl after:absolute after:w-full after:h-full
                            after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:duration-500 after:content-['View_Detail'] after:text-center after:pt-[25%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                                <img src="/webinar.jpg" alt=""
                                     className="w-full h-full object-cover  transition duration-300 delay-150 scale-105  group-hover:scale-100"/>
                            </div>
                            <div className="mt-5 space-y-1">
                                <h4 className="text-lg xl:text-xl font-medium hover:underline">Cracking Coding Interview</h4>
                                <p className="text-sm xl:text-base">Agus Sentosa Hermawan</p>
                                <div className="flex items-center space-x-1.5">
                                    <p className="text-xs xl:text-sm text-gray-600">March 6, 2022</p>
                                    <span className="w-1 h-1 inline-block rounded-full bg-[#0F9D58]"/>
                                    <p className="text-xs xl:text-sm text-[#0F9D58]">Webinar</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    {/*  End of Item  */}
                </div>
            </div>
            {/*  End of Our Activity  */}
        </main>
    );
}

export default Home;