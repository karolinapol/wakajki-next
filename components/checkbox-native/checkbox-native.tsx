import classes from "./checkbox-native.module.scss";

interface CheckboxNativeProps {
  name: string;
  defaultValue?: boolean | null;
  label: string;
  additionalClasses?: string;
}

export const CheckboxNative = ({
  name,
  defaultValue,
  label,
  additionalClasses = "",
}: CheckboxNativeProps): JSX.Element => {
  const getDefaultValue = () => {
    if (defaultValue !== null && defaultValue !== undefined) {
      return defaultValue;
    } else {
      return undefined;
    }
  };

  return (
    <div className={classes.inputWrapper}>
      <input
        defaultChecked={getDefaultValue()}
        className={`${classes.input} ${additionalClasses}`}
        type="checkbox"
        name={name}
        id={name}
      />
      <label className={classes.label} htmlFor={name}>
        {label.toUpperCase()}
      </label>
    </div>
  );
};

export default CheckboxNative;
