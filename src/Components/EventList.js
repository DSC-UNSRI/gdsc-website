import {Link} from "react-router-dom";

function EventList({events}) {
    return (
        <div>
            {events.map((event) => (
                <div className='max-w-xl bg-gray-200 m-4' key={event.id}>
                    <Link to={`/events/${event.id}`}>
                        <h2>{event.title}</h2>
                        <p>Written by {event.author}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default EventList;