import { FC } from "react";

export type ButtonProps = React.PropsWithChildren<{
  className?: string;
}> &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
