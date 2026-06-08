import { ReactNode } from "react";

type DisplayContainerPropsType = {
  children: ReactNode;
  isError?: boolean;
  className?: string;
};

export const DisplayContainer = ({ children, isError, className = "" }: DisplayContainerPropsType) => {
  return (
    <div className={`display-board ${isError ? "display-red" : ""} ${className}`.trim()}>
      {children}
    </div>
  );
};