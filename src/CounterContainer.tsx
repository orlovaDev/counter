import * as React from "react";

type CounterContainerProps = {
  children: React.ReactNode;
}

export const CounterContainer: React.FC<CounterContainerProps> = ({children}) => {
  return (
    <div className="counter-container">
      {children}
    </div>
  );
};

