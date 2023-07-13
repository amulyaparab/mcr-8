import { useParams } from "react-router-dom";

import { useData } from "../Contexts/DataProvider";
import { RSVPModal } from "../Components/RSVPModal";
import { useEffect, useState } from "react";
export const Event = () => {
  const { eventId } = useParams();
  const { showRSVP, setShowRSVP, state } = useData();
  const findEvent = state.filteredData.find((event) => event.id === eventId);
  const date = new Date(findEvent?.eventEndTime);

  const currDate = new Date();
  const endDay = date?.toLocaleDateString("en-US", { weekday: "long" });
  const endMonth = date?.toLocaleDateString("en-US", { month: "long" });
  const endDateNumber = date?.getDate();
  const endYear = date?.getFullYear();
  const endTime = date?.toLocaleTimeString("en-US", {
    timeStyle: "short",
  });

  const startDate = new Date(findEvent?.eventStartTime);
  const startDay = startDate?.toLocaleDateString("en-US", { weekday: "long" });
  const startMonth = startDate?.toLocaleDateString("en-US", { month: "long" });
  const startDateNumber = startDate?.getDate();
  const startYear = startDate?.getFullYear();
  const startTime = startDate?.toLocaleTimeString("en-US", {
    timeStyle: "short",
  });

  const [isEventOld, setIsEventOld] = useState(false);

  useEffect(() => {
    if (date < currDate) {
      setIsEventOld(true);
    }
  }, []);

  return (
    <div className="single-event">
      <div className="main-info">
        <h1>{findEvent?.title}</h1>
        <p>
          Hosted By: <strong>{findEvent?.hostedBy}</strong>
        </p>
        <img src={findEvent?.eventThumbnail} alt={findEvent?.title} />
        <h2>Details:</h2>
        <p className="details">{findEvent?.eventDescription}</p>
        <h2>Additional Information:</h2>
        <p>Dress code: {findEvent?.additionalInformation?.dressCode}</p>
        <p>
          Age Restrictions: {findEvent?.additionalInformation?.ageRestrictions}
        </p>
        <h2>Event Tags:</h2>
        {findEvent?.eventTags?.map((tag) => (
          <p className="event-tag">{tag}</p>
        ))}
      </div>
      <div className="side-info">
        <div>
          <p>
            {startDay} {startDateNumber} {startMonth} {startYear} {startTime} to{" "}
            {endDay} {endDateNumber} {endMonth} {endYear} {endTime}
          </p>
          <p>{findEvent?.address}</p>
          <p>₹ {findEvent?.price}</p>
        </div>
        {findEvent.speakers.length ? (
          <div className="speakers">
            <h2>Speakers:</h2>
            {findEvent?.speakers?.map(({ name, image, designation }) => (
              <div className="speaker">
                <img src={image} alt={name} />
                <p>{name}</p>
                <p>{designation}</p>
              </div>
            ))}
          </div>
        ) : null}
        {!isEventOld && (
          <button onClick={() => setShowRSVP(true)}>
            {findEvent?.rsvp ? "Already RSVPed" : "RSVP"}
          </button>
        )}
      </div>
      {showRSVP && !findEvent?.rsvp && <RSVPModal eventId={findEvent?.id} />}
    </div>
  );
};
