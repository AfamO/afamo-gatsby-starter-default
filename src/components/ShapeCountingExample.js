import React from "react";

const ShapeCountingExample = () => {
  //const [showResults, setShowResults] = useState(false);

  const shapes = [
    { type: "square", count: 2, color: "yellow" },
    { type: "triangle", count: 1, color: "blue" },
    { type: "circle", count: 2, color: "green" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "10px" }}>
      <p>In this example, let's say you see the following series of shapes</p>
      <div style={{ marginBottom: "0px" }}>
        {shapes.map((shape, index) => (
          <div key={index} style={{ margin: "0px" }}>
            {Array.from({ length: shape.count }, (_, i) => (
              <span
                key={i}
                style={{
                  display: "inline-block",
                  margin: "10px",
                  fontSize: "60px", // Larger size
                  color: shape.color, // Different colors
                }}
              >
                {shape.type === "square" && "◼️"}
                {shape.type === "triangle" && "▲"}
                {shape.type === "circle" && "●"}
              </span>
            ))}
          </div>
        ))}
      </div>
      
        <div>
          <p>In this example, the correct count for each shape would be:</p>
          {shapes.map((shape, index) => (
            <p key={index}>
              <strong>{shape.type.charAt(0).toUpperCase() + shape.type.slice(1)}</strong>:{" "}
              {shape.count}
            </p>
          ))}
        </div>
    
    </div>
  );
};

export default ShapeCountingExample;