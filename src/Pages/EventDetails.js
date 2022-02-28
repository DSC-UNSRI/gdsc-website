import {useParams} from "react-router-dom";
import useFetch from "../Helper/useFetch";

function EventDetails() {
    const {eventId} = useParams();
    const {data: event, error, isPending} = useFetch('http://localhost:8080/events/' + eventId);
    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {event && (
                <article>
                    <h2>{event.title}</h2>
                    <p>Written by {event.author}</p>
                </article>
            )}
        </div>
    );
}

export default EventDetails;