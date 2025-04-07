import { MyContext } from "@/context/MyContext";
import { useContext } from "react";

export const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }

  return context;
};
