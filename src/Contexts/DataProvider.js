import { createContext, useContext, useReducer } from "react";
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
              data.title.toLowerCase().includes(action.payload.toLowerCase()) ||
              data.eventTags
                .join("")
                .toLowerCase()
                .includes(action.payload.toLowerCase())
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
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
