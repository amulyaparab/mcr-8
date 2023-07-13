import { useData } from "../Contexts/DataProvider";

export const RSVPModal = ({ eventId }) => {
  const { state, dispatch, showRSVP, setShowRSVP } = useData();
  return (
    <div className="overlay">
      <div className="rsvp-form ">
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
        <p>* You have to make the payment at the venue</p>
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
