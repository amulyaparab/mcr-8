import { useData } from "../Contexts/DataProvider";

export const RSVPModal = ({ eventId }) => {
  const { dispatch, setShowRSVP, state } = useData();
  const findEvent = state.filteredData.find((event) => event.id === eventId);
  return (
    <div className="overlay">
      <div className="rsvp-form ">
        <i
          class="fa-solid fa-circle-xmark"
          onClick={() => setShowRSVP(false)}
        ></i>
        <h4>Complete Your RSVP</h4>
        <p>Fill in your personal information.</p>
        <label>
          Name:
          <input />
        </label>
        <label>
          Email:
          <input type="email" />
        </label>
        {!findEvent?.isPaid && (
          <p>* You have to make the payment at the venue</p>
        )}
        <button
          onClick={() => {
            setShowRSVP(false);
            dispatch({ type: "RSVP", payload: eventId });
          }}
        >
          RSVP
        </button>
      </div>
    </div>
  );
};
