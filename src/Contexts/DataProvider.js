import { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };
  const initialState = {};
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
