import { useData } from "../Contexts/DataProvider";

export const RSVPModal = ({ eventId }) => {
  const { dispatch, setShowRSVP, state } = useData();
  const findEvent = state.filteredData.find((event) => event.id === eventId);
  return (
    <div className="overlay">
      <form
        className="rsvp-form"
        onSubmit={(event) => {
          event.preventDefault();
          setShowRSVP(false);
          dispatch({ type: "RSVP", payload: eventId });
        }}
      >
        <i
          class="fa-solid fa-circle-xmark"
          onClick={() => setShowRSVP(false)}
        ></i>
        <h2>Complete Your RSVP</h2>
        <p>Fill in your personal information.</p>
        <label>
          Name:
          <input required />
        </label>
        <label>
          Email:
          <input type="email" required />
        </label>
        {!findEvent?.isPaid && (
          <p>* You have to make the payment at the venue</p>
        )}
        <button
        // onClick={() => {
        //   setShowRSVP(false);
        //   dispatch({ type: "RSVP", payload: eventId });
        // }}
        >
          RSVP
        </button>
      </form>
    </div>
  );
};
