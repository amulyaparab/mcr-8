import meetup from "../Assets/meetup.svg";
import { useData } from "../Contexts/DataProvider";

export const Header = () => {
  const { dispatch } = useData();
  return (
    <nav>
      <img src={meetup} alt="meetup" />
      <input
        placeholder="Search by title and tags"
        onChange={(event) =>
          dispatch({ type: "SEARCH_BY", payload: event.target.value })
        }
      />
    </nav>
  );
};
