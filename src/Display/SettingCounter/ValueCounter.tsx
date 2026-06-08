import {ChangeEvent} from "react";

type ValueCounterPropsType = {
  // id: string;
  title: string,
  value: number
  onChange: (newValue: number) => void;
  isError: boolean;
}

export const ValueCounter = ({title, value, onChange, isError}: ValueCounterPropsType) => {
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  }

  return (
    <div className={`value-container`}>
      <div>{title}</div>
      <input
        type="number"
        // id={id}
        className={`input-number ${isError ? 'input-error' : ""}`}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};


