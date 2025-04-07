import { ReactNode } from "react";
import CardButton from "./CardButton";
import CardContent2 from "./CardContent2";
import CardTitle2 from "./CardTitle2";

const Card5 = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

Card5.Title = CardTitle2;
Card5.Content = CardContent2;
Card5.Button = CardButton;

export default Card5;
