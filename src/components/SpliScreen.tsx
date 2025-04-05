import { ReactNode } from "react";

interface SpliScreenProps {
  children: [ReactNode, ReactNode];
  leftWeitght?: number;
  rightWeitght?: number;
}

const SpliScreen = ({ children, leftWeitght, rightWeitght }) => {
  const [left, right] = children;

  const leftWidth = `${leftWeitght}rem`;
  const rightWidth = `${rightWeitght}rem`;

  return (
    <section className="flex w-screen">
      <div style={{ width: leftWidth }}>{left}</div>
      <div style={{ width: rightWidth }}>{right}</div>
    </section>
  );
};

export default SpliScreen;
