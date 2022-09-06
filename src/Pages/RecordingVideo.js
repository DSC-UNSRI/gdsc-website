import React from 'react';

function RecordingVideo() {
    return (
        <main className="w-screen relative leading-relaxed text-gray-900 md:bg-amber-300 lg:bg-white overflow-x-hidden mt-32 pb-28 px-20 xl:px-28">
            <article>
                <section></section>
                <section></section>
            </article>
            <article className="w-screen relative flex 2xl:flex-col items-start ">
                <section className="w-screen flex flex-col 2xl:flex-col gap-6 items-start">
                    <div className="flex flex-col gap-2 text-black">
                        <h1 className="font-semibold text-lg xl:text-4xl 2xl:text-4xl">Cracking Coding Interview</h1>
                        <span className="text-[#A3A3A3] font-medium text-lg 2xl:text-2xl">March 6, 2022</span>
                    </div>
                    <div className="w-[70vw] flex flex-col gap-3">
                        <h3 className="font-semibold text-xl xl:text-2xl 2xl:text-3xl">Description</h3>
                        <div className="w-[70vw] flex flex-col">
                            <span className="text-[#A3A3A3] font-normal text-lg 2xl:text-2xl">Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor.</span>
                            <span className="text-[#A3A3A3] font-normal text-lg 2xl:text-2xl">lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum.</span>
                        </div>
                    </div>
                </section>
                <section className="w-screen flex 2xl:flex-col gap-16">
                    <div>
                        <h3>Speakers</h3>
                        <div>
                            <div>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Facilitator</h3>
                        <div>
                            <div>
                                <h4></h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </section>
            </article>
            <article></article>
        </main>
    );
}

export default RecordingVideo;