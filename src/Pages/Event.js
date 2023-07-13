import { useParams } from "react-router-dom";
import { data } from "../Database/data";
export const Event = () => {
  const { eventId } = useParams();
  const findEvent = data.meetups.find((event) => event.id === eventId);
  return (
    <div className="single-event">
      <div className="main-info">
        <h1>{findEvent?.title}</h1>
        <p>
          Hosted By: <strong>{findEvent?.hostedBy}</strong>
        </p>
        <img src={findEvent?.eventThumbnail} alt={findEvent?.title} />
        <h4>Details:</h4>
        <p>{findEvent?.eventDescription}</p>
        <h4>Additional Information:</h4>
        <p>Dress code: {findEvent?.additionalInformation?.dressCode}</p>
        <p>
          Age Restrictions: {findEvent?.additionalInformation?.ageRestrictions}
        </p>
        <h4>Event Tags:</h4>
        {findEvent?.eventTags?.map((tag) => (
          <p>{tag}</p>
        ))}
      </div>
      <div>
        <div>
          <p>
            {findEvent?.eventStartTime} to {findEvent?.eventEndTime}
          </p>
          <p>{findEvent?.address}</p>
          <p>₹ {findEvent?.price}</p>
        </div>
        <div>
          <h4>Speakers:</h4>
          {findEvent?.speakers?.map(({ name, image, designation }) => (
            <div>
              <img src={image} alt={name} />
              <p>{name}</p>
              <p>{designation}</p>
            </div>
          ))}
        </div>
        <button>RSVP</button>
      </div>
    </div>
  );
};
//   {
//       id: "meet003",
//       title: "Marketing Seminar",
//       eventStartTime: "2023-08-15T10:00:00",
//       eventEndTime: "2023-08-15T12:00:00",
//       location: "Marketing City",
//       address: "789 Marketing Avenue, City",
//       eventThumbnail: "https://i.postimg.cc/L8FvgZ94/pexels-photo-6476776.jpg",
//       eventDescription:
//         "Stay ahead of the game in the dynamic field of digital marketing by attending the Marketing Seminar organized by Marketing Experts. This offline seminar will be held on August 15th from 10:00 AM to 12:00 PM at Marketing City, situated at 789 Marketing Avenue, City. Join industry leaders Sarah Johnson, Marketing Manager, and Michael Brown, SEO Specialist, as they delve into the latest trends and strategies in digital marketing. The seminar is open to individuals aged 18 and above and requires a ticket priced at ₹3,000. The dress code for the event is smart casual.",
//       hostedBy: "Marketing Experts",
//       eventType: "Offline",
//       isPaid: true,
//       eventTags: ["marketing", "digital"],
//       speakers: [
//         {
//           name: "Sarah Johnson",
//           image: "https://i.postimg.cc/yxTqcNXG/pexels-photo-1239288.jpg",
//           designation: "Marketing Manager",
//         },
//         {
//           name: "Michael Brown",
//           image: "https://i.postimg.cc/nL96T2GB/pexels-photo-2182970.jpg",
//           designation: "SEO Specialist",
//         },
//       ],
//       price: "3,000",
//       additionalInformation: {
//         dressCode: "Smart casual",
//         ageRestrictions: "18 and above",
//       },
//     },
