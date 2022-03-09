import React, { useState } from "react";
import cat from "./cat.jpg";

const Cat = ({ mouse }) => {
  return (
    <img
      alt="Error"
      src={cat}
      style={{
        position: "absolute",
        left: mouse.x,
        top: mouse.y,
        height: 80,
        width: 80,
      }}
    />
  );
};

const Mouse = ({ render }) => {
  const [state, setState] = useState({ x: 0, y: 0 });
  // const innerRef = useRef(null);

  const handleMouseMove = (event) => {
    setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <div style={{ height: "100vh" }} onMouseMove={handleMouseMove}>
      {/*
            En lugar de proporcionar una representación estática de lo que <Mouse> renderiza,
            usa la `render prop` para determinar dinámicamente qué renderizar.
          */}
      {render(state)}
    </div>
  );
};

export const MouseTracker2 = () => {
  return (
    <div>
      <h1>Move the mouse around!</h1>
      <Mouse render={(mouse) => <Cat mouse={mouse} />} />
    </div>
  );
};
