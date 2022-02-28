import EventList from "../Components/EventList";
import useFetch from "../Helper/useFetch";

function Events() {
    const {error, isPending, data: events} = useFetch('http://localhost:8080/events')

    return (
        <div>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {events && <EventList events={events}/>}
        </div>
    );
}

export default Events;