import meetup from "../Assets/meetup.svg";
import { useData } from "../Contexts/DataProvider";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const { dispatch } = useData();
  const navigate = useNavigate();
  return (
    <nav>
      <img
        src={meetup}
        alt="meetup"
        onClick={() => navigate("/")}
        className="cursor"
      />
      <input
        placeholder="Search by title and tags"
        onChange={(event) =>
          dispatch({ type: "SEARCH_BY", payload: event.target.value })
        }
      />
    </nav>
  );
};
