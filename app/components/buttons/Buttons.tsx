import React from "react";

interface buttonProps{
    className : string,
    text: string,
}

const Button: React.FC<buttonProps> = ({className, text}) => {
  return (
    <>
      <button className={`${className}`}>{text}</button>
    </>
  );
};
export default Button;
