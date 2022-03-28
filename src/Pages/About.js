import {Link} from "react-router-dom";

function About(props) {
    return (
            <main
            className="w-screen leading-relaxed text-gray-900 md:bg-amber-300 lg:bg-white overflow-x-hidden mt-14 xl:mt-16 pb-24">
             {/*Hero*/}
             <div style={{backgroundImage: "url(/bg-about.svg)", backgroundSize: "cover", backgroundRepeat: "repeat-y"}}
                 className="w-full h-[25em] xl:h-[28em] 2xl:h-[30em]">
                <div className="flex justify-between items-center px-8 xl:px-16 2xl:px-20 h-full tracking-wide">
                    <div className="w-3/5 pr-20 xl:pr-32 space-y-5 xl:space-y-8">
                        <h1 className="font-bold text-4xl xl:text-5xl 2xl:text-6xl leading-tight">About GDSC</h1>
                        <p className="xl:text-lg text-justify">Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
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
            {/* Section */}
            <div className="flex flex-col justify-between items-center relative" style={{boxShadow: "1px -4px 9px 1px rgba(0,0,0,0.15)"}}>
                <div className="absolute left-0 top-28">
                    <img src="/hiasan1-about.svg"/>
                </div>
                <div className="absolute right-0 top-24">
                    <img src="/hiasan2-about.svg"/>
                </div>
                <div className="flex flex-col justify-between items-center py-20 max-w-2xl xl:max-w-3xl">
                    <h2 className="font-bold text-2xl">Mission and Values</h2>
                    <p className="xl:text-lg text-center mt-10">Google Developer Student Clubs (GDSC) are community groups for college and university students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="font-bold text-2xl">Their Tougths About GDSC</h2>
                    <div className="grid grid-cols-3 mt-10 gap-x-10">
                        {/*Item*/}
                        <div className="mb-12 w-72 xl:w-96 2xl:w-[25rem]">
                            <Link to="">
                                <div className="group h-44 xl:h-56 relative overflow-hidden rounded-xl after:absolute after:w-full after:h-full
                                after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:duration-500 after:content-['View_Detail'] after:text-center after:pt-[25%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                                    <img src="/dummy-yellow.svg" alt=""
                                        className="w-full h-full object-cover  transition duration-300 delay-150 scale-105  group-hover:scale-100"/>
                                </div>
                                <div className="mt-5 space-y-1">
                                    <h4 className="text-lg xl:text-xl font-medium hover:underline">Somebody's Name</h4>
                                    <p className="text-sm xl:text-base text-gray-600 font-medium">Core Team of GDSC</p>
                                    <p className="pt-8 text-sm">GDSC is a perfect place for students to improve
IT skills such as UI/UX, Machine Learning, Web Development. </p>
                                </div>
                            </Link>
                        </div>
                        {/*  End of Item  */}
                        {/*Item*/}
                        <div className="mb-12 w-72 xl:w-96 2xl:w-[25rem]">
                            <Link to="">
                                <div className="group h-44 xl:h-56 relative overflow-hidden rounded-xl after:absolute after:w-full after:h-full
                                after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:duration-500 after:content-['View_Detail'] after:text-center after:pt-[25%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                                    <img src="/dummy-green.svg" alt=""
                                        className="w-full h-full object-cover  transition duration-300 delay-150 scale-105  group-hover:scale-100"/>
                                </div>
                                <div className="mt-5 space-y-1">
                                    <h4 className="text-lg xl:text-xl font-medium hover:underline">Somebody's Name</h4>
                                    <p className="text-sm xl:text-base text-gray-600 font-medium">Core Team of GDSC</p>
                                    <p className="pt-8 text-sm">GDSC is a perfect place for students to improve
IT skills such as UI/UX, Machine Learning, Web Development. </p>
                                </div>
                            </Link>
                        </div>
                        {/*  End of Item  */}
                        {/*Item*/}
                        <div className="mb-12 w-72 xl:w-96 2xl:w-[25rem]">
                            <Link to="">
                                <div className="group h-44 xl:h-56 relative overflow-hidden rounded-xl after:absolute after:w-full after:h-full
                                after:bg-white/100 after:inset-0 after:opacity-0 hover:after:opacity-100 hover:after:bg-white/50 after:transition-all after:duration-500 after:content-['View_Detail'] after:text-center after:pt-[25%] after:text-gray-500 after:font-medium after:drop-shadow-sm">
                                    <img src="/dummy-red.svg" alt=""
                                        className="w-full h-full object-cover  transition duration-300 delay-150 scale-105  group-hover:scale-100"/>
                                </div>
                                <div className="mt-5 space-y-1">
                                    <h4 className="text-lg xl:text-xl font-medium hover:underline">Somebody's Name</h4>
                                    <p className="text-sm xl:text-base text-gray-600 font-medium">Core Team of GDSC</p>
                                    <p className="pt-8 text-sm">GDSC is a perfect place for students to improve
IT skills such as UI/UX, Machine Learning, Web Development. </p>
                                </div>
                            </Link>
                        </div>
                        {/*  End of Item  */}
                    </div>
                </div>
            </div>
            {/* End of Sectioin */}
            </main>
    );
}

export default About;