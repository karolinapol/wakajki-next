import classes from "./input-native.module.scss";

interface InputNativeProps {
  name: string;
  defaultValue?: string | number | null;
  label: string;
  type?: "text" | "date" | "time" | "number" | "currency";
  additionalClasses?: string;
}

export const InputNative = ({
  name,
  defaultValue,
  label,
  type = "text",
  additionalClasses = "",
}: InputNativeProps): JSX.Element => {
  const getDefaultValue = () => {
    if (defaultValue !== null && defaultValue !== undefined) {
      return defaultValue;
    } else {
      return undefined;
    }
  };

  const getType = () => {
    if (type !== "currency") {
      return type;
    } else {
      return "number";
    }
  };

  return (
    <div
      className={`${classes.inputWrapper} ${
        type === "currency" ? classes.inputWrapperCurrency : ""
      }`}
    >
      <label className={classes.label} htmlFor={name}>
        {label.toUpperCase()}
      </label>
      <input
        defaultValue={getDefaultValue()}
        className={`${classes.input} ${additionalClasses}`}
        type={getType()}
        name={name}
        id={name}
      />
    </div>
  );
};

export default InputNative;
