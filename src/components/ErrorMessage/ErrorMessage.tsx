import React from "react";

interface child {
    children : | JSX.Element
    | JSX.Element[]
    | string
    | string[];
}

const ErrorMessage:React.FC<child>= ({ children }) => {
    return (
      <div
        style={{
          width: "100%",
          padding: 10,
          marginBottom: 10,
          borderRadius: 4,
          backgroundColor: "orangered",
          textAlign: "center",
          color: "white",
          textTransform: "capitalize",
        }}
      >
        {children}
      </div>
    );
  };
  
  export default ErrorMessage;