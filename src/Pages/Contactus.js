import React from "react";
import ReactDOM from 'react-dom';
import App from '../App';


function Contactus(){
    return (
        <main className = "w-screen leading-relaxed text-gray-900 md:bg-amber-300 lg:bg-white xl:bg-red-200 2xl:bg-slate-400 overflow-x-hidden mt-16 pb-24">

            <div className="lg:mx-40 xl:mx-48 w-[40vw] mt-20 relative">
                <h1 className="text-lg text-blue-600 font-bold">Get in Touch with Us</h1>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper diam vitae consectetur mollis. Phasellus iaculis metus
                    non diam mollis, vitae malesuada lorem dapibus.
            <div className="absolute right-[-700px] top-[-30px]">
                        <img className="w-[50em] xl:w-[63em] xl:h-[8em]" src="/hiasan.png" alt="hiasan"/>
            </div>
                </div>
            </div>
        
 

   
        <div className="absolute top-[500px]">
            <img className="w-fit h-fit" src="/bg-home.png"></img>
        </div>
        
        <div className="flex absolute">
            <div className="m-auto mt-20 flex w-fit">
                {/* White form */}
                <div className="bg-white shadow-xl rounded-md py-14 px-20 w-[45vw]">
                    <h1 className="font-bold text-lg mb-5"> Send a Message </h1>
                    <div className="grid grid-cols-2">
                    <div>
                    <label for = "fname"> First Name </label> <br></br>
                    <input type = "text"  className = "border rounded-md lg:w-36 xl:w-48 mb-5" id="fname"></input>
                    </div>

                    <div>
                    <label for = "email"> Email </label> <br></br>
                    <input type = "text" className="border rounded-md lg:w-36 xl:w-48" id="email"></input>
                    </div>

                    <div>
                    <label for = "lname"> Last Name </label> <br></br>
                    <input type = "text" id="lname" className="border rounded-md lg:w-36 xl:w-48 mb-5"></input>
                    </div>

                    <div>
                    <label for = "phone"> Phone </label> <br></br>
                    <input type = "number" className="border rounded-md lg:w-36 xl:w-48" id="phone"></input>
                    </div>
                    </div>

                    <div>
                        <label for = "help">How Can We Help?</label>
                        <textarea for ="help" rows="7" className="border rounded-1xl w-full"></textarea>
                    </div>

                    <div className="flex">
                    <a href = "#" className="m-auto bg-blue-500 text-white mt-7  lg:w-80 xl:w-[50vw] inline-block py-1 text-center rounded-lg shadow-lg"> Submit</a>
                    </div>
                </div>
                {/* End white */}

                {/* Blue form */}
                <div className = "bg-blue-500 p-10 text-white border rounded-md w-[30vw]">
                    <h2 className="font-bold text-lg pb-6"> Contact Us </h2>
                    <div className="pb-6">
                        Email <br></br>
                        <a href ="#">GDSCUnsri@gmail.com</a>
                    </div>

                    <div>
                        Phone <br></br>
                        +628219444232425
                    </div>

                    <div className="pt-7 flex">
                        <a href="#"><img src="/Ellipse2-1.png" className="w-14 pr-6"></img></a>
                        <a href="#"><img src="/Ellipse2-1.png" className="w-14 pr-6"></img></a>
                        <a href="#"><img src="/Ellipse2-1.png" className="w-14 pr-6"></img></a>

                    </div>
                </div>
                {/* End blue */}
            </div>

        </div>



       
  


        </main>
    );
}

export default Contactus;