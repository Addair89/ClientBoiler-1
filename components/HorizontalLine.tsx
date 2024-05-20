import React from "react";

const HorizontalLine: React.FC = () => {
  return (
    <hr
      style={{
        width: "20vw",
        backgroundColor: "#999292",
        marginTop: "6rem",
        marginBottom: "6rem",
        height: "3px",
        marginLeft: "auto",
        marginRight: "auto",
        border: "none",
        borderRadius: "5rem",
      }}
    />
  );
};

export default HorizontalLine;
