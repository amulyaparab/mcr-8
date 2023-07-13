import meetup from "../Assets/meetup.svg";

export const Header = () => {
  return (
    <nav>
      <img src={meetup} alt="meetup" />
      <input placeholder="Search by title and tags" />
    </nav>
  );
};
