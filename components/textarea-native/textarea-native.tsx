import classes from "./textarea-native.module.scss";

interface TextareaNativeProps {
  name: string;
  defaultValue?: string | number | null;
  label: string;
  additionalClasses?: string;
}

export const TextareaNative = ({
  name,
  defaultValue,
  label,
  additionalClasses = "",
}: TextareaNativeProps): JSX.Element => {
  const getDefaultValue = () => {
    if (defaultValue !== null && defaultValue !== null) {
      return defaultValue;
    } else {
    }
  };

  return (
    <div className={classes.inputWrapper}>
      <label className={classes.label} htmlFor={name}>
        {label.toUpperCase()}
      </label>
      <textarea
        defaultValue={getDefaultValue()}
        className={`${classes.input} ${additionalClasses}`}
        name={name}
        id={name}
      />
    </div>
  );
};

export default TextareaNative;
