import './App.css';
import {Counter} from "./Display/Counter/Counter.tsx";
import {SettingCounter} from "./Display/SettingCounter/SettingCounter.tsx";
import {useState} from "react";

const DEFAULT_START_VALUE = 0;
const DEFAULT_MAX_VALUE = 1;

export const App = () => {
  const [startValue, setStartValue] = useState(DEFAULT_START_VALUE);
  const [maxValue, setMaxValue] = useState(DEFAULT_MAX_VALUE);

  const [count, setCount] = useState(DEFAULT_START_VALUE);
  const [currentMax, setCurrentMax] = useState(DEFAULT_MAX_VALUE);

  const [isSettingsChanged, setIsSettingsChanged] = useState(false);

  const changeStartHandler = (newValue: number) => {
    setStartValue(newValue);
    setIsSettingsChanged(true); // Пользователь начал менять настройки!
  };

  const changeMaxHandler = (newValue: number) => {
    setMaxValue(newValue);
    setIsSettingsChanged(true); // Пользователь начал менять настройки!
  };

  const isErrorMax = maxValue <= startValue || maxValue < 0;
  const isErrorStart = startValue >= maxValue || startValue < 0;
  const hasAnyError = isErrorMax || isErrorStart;

  const setValuesHandler = () => {
    if (!hasAnyError) {
      setCurrentMax(maxValue);
      setCount(startValue);
      setIsSettingsChanged(false); // Настройки применились, скрываем надпись!
    }
  };

  return (
    <div className="App">
      <SettingCounter
        startValue={startValue}
        onChangeStart={changeStartHandler}
        maxValue={maxValue}
        onChangeMax={changeMaxHandler}
        onSetValues={setValuesHandler}
        isErrorMax={isErrorMax}
        isErrorStart={isErrorStart}
        isSettingsChanged={isSettingsChanged} // Передаем, чтобы кнопка "set" знала, когда активироваться
      />
      <Counter
        startValue={startValue}
        maxValue={currentMax}
        count={count}
        setCount={setCount}
        hasError={hasAnyError}
        isSettingsChanged={isSettingsChanged} // Передаем в счетчик для показа текста!
      />
    </div>
  );
}
