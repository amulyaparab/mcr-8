import { useData } from "../Contexts/DataProvider";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useData();
  return (
    <>
      <div className="header">
        <h1>Meetup Events</h1>
        <select
          defaultValue={"placeholder"}
          onChange={(event) =>
            dispatch({ type: "FILTER_BY", payload: event.target.value })
          }
        >
          <option value={"placeholder"} disabled>
            Select Event Type
          </option>
          <option>Online</option>
          <option>Offline</option>
          <option>Both</option>
        </select>
      </div>
      <div className="events">
        {state.filteredData.map(
          ({
            id,
            title,
            eventStartTime,
            eventEndTime,
            location,
            address,
            eventThumbnail,
            eventDescription,
            hostedBy,
            eventType,
            isPaid,
            eventTags,
            speakers,
            price,
            additionalInformation,
          }) => {
            const date = new Date(eventStartTime);
            {
              /* const day = date.getDay();
            const month = date.getMonth();
            const dateNumber = date.getDate();
            const year = date.getFullYear(); */
            }
            const day = date.toLocaleDateString("en-US", { weekday: "long" });
            const month = date.toLocaleDateString("en-US", { month: "long" });
            const dateNumber = date.getDate();
            const year = date.getFullYear();
            const time = date.toLocaleTimeString("en-US", {
              timeStyle: "short",
            });

            console.log(date, "daate");
            return (
              <div className="event" onClick={() => navigate(`/event/${id}`)}>
                <p className="tag">{eventType}</p>
                <img src={eventThumbnail} alt={title} />
                <p>
                  {day} {month} {dateNumber} {year} {time} IST
                </p>
                <h4>{title}</h4>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
