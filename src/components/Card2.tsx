import { ReactNode } from "react";
import CardContent from "./CardContent";
import CardFooter from "./CardFooter";
import CardTitle from "./CardTitle";

const Card2 = ({ children }: { children: ReactNode }) => {
  return (
    <div className="border rounded-lg shadow-lg w-[20rem] p-4 bg-white">
      {children}
    </div>
  );
};

Card2.Title = CardTitle;
Card2.Content = CardContent;
Card2.Footer = CardFooter;


export default Card2;
