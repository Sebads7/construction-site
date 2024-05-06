import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full h-[1000px]  ">{children}</div>;
};

export default Container;
