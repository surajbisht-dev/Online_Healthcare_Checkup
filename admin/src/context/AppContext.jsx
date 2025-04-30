import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [loading, setLoading] = useState(false);
  const [currency, setCurrency] = useState("₹");

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  };

  const slotDateFormat = (dateStr) => {
    const date = new Date(dateStr);
    const offset = date.getTimezoneOffset(); // get timezone offset in minutes
    date.setMinutes(date.getMinutes() - offset); // adjust for local timezone
    return date.toISOString().split("T")[0]; // keep format 'YYYY-MM-DD'
  };

  const value = {
    loading,
    setLoading,
    currency,
    setCurrency,
    calculateAge,
    slotDateFormat,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
