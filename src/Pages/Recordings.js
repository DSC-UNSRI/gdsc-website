import EventItem from "../Components/EventItem";

export default function Community() {
    return (
        <main 
            className="w-screen leading-relaxed text-gray-900 md:bg-amber-300 lg:bg-white overflow-x-hidden mt-16 pb-28">
            {/* WIP carousel */}
            <div className="mt-12 px-20 xl:px-28">
                <h2 className="text-lg xl:text-xl font-bold mb-3 text-[#4285F4]">Recordings</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    <EventItem 
                        title="Webinar Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Webinar"
                    />
                    <EventItem 
                        title="Webinar Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Webinar"
                    />
                    <EventItem 
                        title="Webinar Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Webinar"
                    />
                    <EventItem 
                        title="Webinar Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Webinar"
                    />
                    <EventItem 
                        title="Webinar Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Webinar"
                    />
                    <EventItem 
                        title="Webinar Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Webinar"
                    />
                    <EventItem 
                        title="Workshop Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Workshop"
                    />
                    <EventItem 
                        title="Workshop Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Workshop"
                    />
                    <EventItem 
                        title="Workshop Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Workshop"
                    />
                    <EventItem 
                        title="Workshop Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Workshop"
                    />
                    <EventItem 
                        title="Workshop Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Workshop"
                    />
                    <EventItem 
                        title="Workshop Title"
                        img="/webinar.jpg"
                        author="Speaker Name"
                        date="Date"
                        type="Workshop"
                    />
                </div>
            </div>
        </main>
    );
}