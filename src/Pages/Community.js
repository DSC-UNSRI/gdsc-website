import { Link } from "react-router-dom";

export default function Community() {
    return (
        <main 
            className="w-screen leading-relaxed text-gray-900 md:bg-amber-300 lg:bg-white overflow-x-hidden mt-16 pb-0">
            {/* WIP carousel */}
            <div className="mt-12">
                <div className="flex items-center justify-between px-20 xl:px-28">
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
                        <Link to="/about">
                            <button
                                className="mt-4 px-3 py-1.5 xl:px-5 2xl:px-5 2xl:py-1  text-sm xl:text-base font-medium text-white tracking-wide bg-[#4285F4] hover:bg-[#4285F4]/90 transition rounded-md ">
                                Learn more
                            </button>
                        </Link>
                    </div>
                    <div className="xl:w-1/3 lg:w-2/5">
                        <img src="/dummy.png" alt="mission-and-values" className="w-full h-full object-cover"/>
                    </div>
                </div>
                <div className="shadow-[inset_0_4px_4px_0_rgb(0,0,0,0.1)] flex items-center justify-between mt-16 relative z-10 px-20 xl:px-28 py-20 bg-pattern bg-center bg-[length:300px]">
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
                    </div>
                </div>
            </div>
        </main>
    );
}