import * as React from "react";

type ButtonsContainer = {
  children: React.ReactNode;
}

export const ButtonsContainer: React.FC<ButtonsContainer> = ({children}) => {
  return (
    <div className="buttons-container">
      {children}
    </div>
  );
};