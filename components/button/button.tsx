import classes from "./button.module.scss";

interface ButtonProps {
  type: "button" | "reset" | "submit";
  color: "Yellow" | "Red";
  onClick?: (() => void) | ((e: MouseEvent) => void);
  text: string;
  additionalClasses?: string;
  isDisabled?: boolean;
  hasFixedWidth?: boolean;
  width?: "Sm" | "Md" | "Lg" | "Xl";
}

export const Button = ({
  type = "button",
  color = "Yellow",
  onClick,
  text,
  additionalClasses,
  isDisabled = false,
  hasFixedWidth = false,
  width = "Sm",
}: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick ? onClick : undefined}
      className={`${classes.button} 
        ${hasFixedWidth ? `${classes.button}${width}` : ""} 
        ${!isDisabled ? `${classes.button}${color}` : classes.buttonDisabled} 
        ${additionalClasses || ""}
      `}
      type={type}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};

export default Button;
