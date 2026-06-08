import {Button} from "../../Button/Button.tsx";
// import {useState} from "react";
// import {v4 as uuidv4} from 'uuid';
import {CounterContainer} from "../../CounterContainer.tsx";
import {ButtonsContainer} from "../../Button/ButtonsContainer.tsx";
import {ValueCounter} from "./ValueCounter.tsx";
import {DisplayContainer} from "../DisplayContainer.tsx";

type SettingCounterPropsType = {
  startValue: number
  onChangeStart: (newValue: number) => void
  maxValue: number,
  onChangeMax: (newValue: number) => void
  onSetValues: () => void
  isErrorMax: boolean,
  isErrorStart: boolean,
  isSettingsChanged: boolean
}

export const SettingCounter = ({startValue, onChangeStart, maxValue, onChangeMax, onSetValues, isErrorMax, isErrorStart, isSettingsChanged}: SettingCounterPropsType) => {

  // const [maxId] = useState(() => uuidv4());
  // const [startId] = useState(() => uuidv4());

  return (
    <CounterContainer>
      <DisplayContainer className="values-container">
        <ValueCounter
          // id={maxId}
          title="max value:"
          value={maxValue}
          onChange={onChangeMax}
          isError={isErrorMax}
        />
        <ValueCounter
          // id={startId}
          title="start value:"
          value={startValue}
          onChange={onChangeStart}
          isError={isErrorStart}
        />
      </DisplayContainer>
      <ButtonsContainer>
        <Button
          title={"set"}
          className="button-styled"
          disabled={isErrorMax || isErrorStart || !isSettingsChanged}
          onClick={() => onSetValues()}
        />
      </ButtonsContainer>
    </CounterContainer>
  );
};

