import {Link} from "react-router-dom";

export default function EventItem(props) {
    let typeColor, typeColorBg;
    
    if (props.type == "Workshop") {
        typeColor = "text-[#F24336]";
        typeColorBg = "bg-[#F24336]";
    } else if (props.type == "Webinar") {
        typeColor = "text-[#0F9D58]";
        typeColorBg = "bg-[#0F9D58]";
    }
    

    return (
        <div className="mb-12">
            <Link to={`/events/${props.link}`}>
                <div className="group event-item">
                    <img src={props.img} alt=""
                            className="event-img"/>
                </div>
                <div className="mt-5 space-y-1">
                    <h4 className="text-lg xl:text-xl font-medium hover:underline">{props.title}</h4>
                    <p className="text-sm xl:text-base">{props.author}</p>
                    <div className="flex items-center space-x-1.5">
                        <p className="text-xs xl:text-sm text-gray-600">{props.date}</p>
                        <span className={"w-1 h-1 inline-block rounded-full " + typeColorBg}/>
                        <p className={"text-xs xl:text-sm " + typeColor}>{props.type}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}