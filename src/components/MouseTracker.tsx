import { useState } from "react";

const MouseTracker = ({ render }: any) => {
  const [position, setPosition] = useState({
    x: 10,
    y: 20,
  });

  const handleMouseMove = (event: any) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{
        height: "100vh",
      }}
    >
      {render(position)}
    </div>
  );
};

export default MouseTracker;
