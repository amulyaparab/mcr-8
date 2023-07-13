import { data } from "../Database/data";

export const Home = () => {
  return (
    <>
      <div className="header">
        <h1>Meetup Events</h1>
        <select>
          <option>Select Event Type</option>
          <option>Online</option>
          <option>Offline</option>
          <option>Both</option>
        </select>
      </div>
      <div className="events">
        {data.meetups.map(
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
          }) => (
            <div className="event">
              <p className="tag">{eventType}</p>
              <img src={eventThumbnail} alt={title} />
              <p>{eventStartTime}</p>
              <h4>{title}</h4>
            </div>
          )
        )}
      </div>
    </>
  );
};
