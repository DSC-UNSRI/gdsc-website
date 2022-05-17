import React from "react";

function Contactus(){
    return (
        <main className = "w-screen h-max text-gray-900" >
        <div style={{backgroundImage: "url(/bg-complete2.png)", backgroundSize: "cover", backgroundRepeat: "none" }} className= "w-screen bg-cover top-0 bottom-0 lg:pb-60 xl:pb-80 2xl:pb-96">

            <div className="lg:mx-40 xl:mx-48 2xl:mx-64 w-[40vw] mt-36">
                <h1 className="text-xl text-blue-600 font-bold">Get in Touch with Us</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper diam vitae consectetur mollis. Phasellus iaculis metus
                    non diam mollis, vitae malesuada lorem dapibus.
            <div className="absolute  top-[90px] right-[-40px]">
                        <img className="w-[50em] xl:w-[63em] xl:h-[8em]" src="/hiasan.png" alt="hiasan"/>
            </div>
                </div>
            </div>
        
       
        <div className="flex">
            <div className="m-auto mt-20 flex w-fit">
                {/* White form */}
                <div className="bg-white shadow-xl rounded-md py-14 px-20 w-[45vw] 2xl:w-[40vw]">
                    <h1 className="font-bold text-xl mb-5"> Send a Message </h1>
                    <div className="grid grid-cols-2">
                    <div>
                    <label for = "fname"> First Name </label> <br></br>
                    <input type = "text" id="fname" required className = "border border-gray-400 px-2 py-1 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 rounded-md lg:w-36 xl:w-48 2xl:w-56 mb-5"></input>
                    </div>

                    <div>
                    <label for = "email"> Email </label> <br></br>
                    <input type = "email" id= "email" required className="border border-gray-400 px-2 py-1 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 rounded-md lg:w-36 xl:w-48 2xl:w-56" ></input>
                    </div>

                    <div>
                    <label for = "lname"> Last Name </label> <br></br>
                    <input type = "text" id="lname" required className="border border-gray-400 px-2 py-1 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 rounded-md lg:w-36 xl:w-48 2xl:w-56 mb-5"></input>
                    </div>

                    <div>
                    <label for = "phone"> Phone </label> <br></br>
                    <input type = "number" required className="border border-gray-400 px-2 py-1 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 rounded-md lg:w-36 xl:w-48 2xl:w-56" id="phone"></input>
                    </div>
                    </div>

                    <div>
                        <label for = "help">How Can We Help?</label>
                        <textarea for ="help" rows="7" required className="border border-gray-400 px-2 py-1 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 rounded-md w-full"></textarea>
                    </div>

                    <div className="flex">
                    <a href = "#" className="m-auto bg-blue-500 text-white mt-7  lg:w-80 xl:w-[50vw] inline-block py-1 text-center rounded-lg shadow-lg"> Submit</a>
                    </div>
                </div>
                {/* End white */}

                {/* Blue form */}
                <div className = "px-10 pt-10 text-white border shadow-xl rounded-md w-[30vw]" style={{backgroundImage: "url(/Bg-blue.png)", backgroundSize: "cover"}}>
                    <h2 className="font-bold text-xl pb-4"> Contact Us </h2>
                    <div className="pb-6">
                        Email <br></br>
                        <a href ="#">GDSCUnsri@gmail.com</a>
                    </div>

                    <div>
                        Phone <br></br>
                        +628219444232425
                    </div>

                    <div className="pt-7 flex">
                        <a href="#"><img src="/Insta.png" className="w-14 pr-6"></img></a>
                        <a href="#"><img src="/Linkedin.png" className="w-14 pr-6"></img></a>
                        <a href="#"><img src="/Youtube.png" className="w-14 pr-6"></img></a>

                    </div>

                </div>
                {/* End blue */}
            </div>

        </div>

        </div>

        </main>
    );
}

export default Contactus;