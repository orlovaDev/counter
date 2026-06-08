import {Button} from "../../Button/Button.tsx";
import {CounterContainer} from "../../CounterContainer.tsx";
import {ButtonsContainer} from "../../Button/ButtonsContainer.tsx";
import {DisplayContainer} from "../DisplayContainer.tsx";

type CounterPropsType = {
  startValue: number,
  maxValue: number,
  count: number,
  setCount: (value: number) => void,
  hasError: boolean,
  isSettingsChanged: boolean
}

export const Counter = ({startValue, maxValue, count, setCount, hasError, isSettingsChanged}: CounterPropsType) => {

  const incrementCount = () => {
    if (count < maxValue) {
      setCount(count + 1)
    }
  };
  const resetCount = () => setCount(startValue);

  const renderDisplayContent = () => {
    if (hasError) {
      return <span className="error-text">Incorrect value!</span>;
    }
    if (isSettingsChanged) {
      return <span className="info-text">Enter value and press 'set'</span>;
    }
    return count;
  };

  return (
    <CounterContainer>
      <DisplayContainer isError={hasError || (!isSettingsChanged && count === maxValue)}>
        {renderDisplayContent()}
      </DisplayContainer>
      <ButtonsContainer>
        <Button
          disabled={hasError || isSettingsChanged || count === maxValue}
          title={"inc"}
          className="button-styled"
          onClick={incrementCount}
        />
        <Button
          disabled={hasError || isSettingsChanged || count === startValue}
          title={"reset"}
          className="button-styled"
          onClick={resetCount}
        />
      </ButtonsContainer>
    </CounterContainer>
  );
};
