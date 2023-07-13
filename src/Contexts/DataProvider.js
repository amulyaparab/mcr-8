import { createContext, useContext, useReducer, useState } from "react";
import { data } from "../Database/data";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "FILTER_BY":
        return {
          ...state,
          filteredData: state.data.filter((data) =>
            action.payload === "Both" ? data : data.eventType === action.payload
          ),
        };
      case "SEARCH_BY":
        return {
          ...state,
          filteredData: state.data.filter(
            (data) =>
              data.title
                .toLowerCase()
                .includes(action.payload.toLowerCase().trim()) ||
              data.eventTags
                .join("")
                .toLowerCase()
                .includes(action.payload.toLowerCase().trim())
          ),
        };
      case "RSVP":
        return {
          ...state,
          filteredData: state.filteredData.map((event) =>
            event.id === action.payload
              ? { ...event, rsvp: true }
              : { ...event, rsvp: false }
          ),
        };
      default:
        return state;
    }
  };
  const initialState = {
    data: data.meetups,
    filteredData: data.meetups,
    sortType: "Both",
    searchVal: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showRSVP, setShowRSVP] = useState(false);
  return (
    <DataContext.Provider value={{ state, dispatch, showRSVP, setShowRSVP }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
