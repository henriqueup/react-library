import React from "react";
import "./Button.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: "primary" | "danger";
  shape?: "rounded";
}

const Button: React.FC<ButtonProps> = ({ variant, shape, children, ...props }) => {
  const classNames = `btn btn-${variant} btn-${shape}`;

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
};

export default Button;
