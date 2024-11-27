import classes from "./input.module.scss";

interface InputProps {
  setState: React.Dispatch<React.SetStateAction<string>>;
  handleValueChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string | number;
  placeholder?: string;
  id: string;
  labelText?: string;
  additionalClasses?: string;
  required?: boolean;
  size?: "Sm" | "Md" | "Lg";
  type?: "text" | "date" | "password" | "email";
  onFocus?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  setState,
  handleValueChange,
  name,
  value,
  placeholder,
  id,
  labelText,
  additionalClasses,
  required,
  size,
  type,
  onFocus,
  onBlur,
}: InputProps): JSX.Element => {
  function internalHandleValueChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setState(event.currentTarget.value);
  }

  return (
    <>
      {labelText && (
        <label className={classes.label} htmlFor={id}>
          {labelText.toUpperCase()}
        </label>
      )}
      <input
        onChange={
          handleValueChange !== undefined
            ? handleValueChange
            : internalHandleValueChange
        }
        className={`${classes.input} 
        ${`${classes.input}${size}`} 
        ${additionalClasses || ""}
      `}
        type={type}
        name={name}
        value={value}
        id={id}
        placeholder={placeholder}
        required={required}
        onFocus={onFocus}
        onBlur={onBlur}
      ></input>
    </>
  );
};

export default Input;
