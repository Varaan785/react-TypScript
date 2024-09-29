// import { useState } from "react";

import Button from "componets/Button/Button";
import { ButtonComponent } from "componets/Button/styles";
import { CounterProps } from "./types";
import { CounterWrapper } from "./styles";
import { ButtenControl } from "./styles";
import { Count } from "./styles";
import { useState } from "react";
// !! Есть 2 основных способа вызова перерендера(обновления) компонента:
// 1 - изменения state(посредством вызова функции setState())
// 2 - изменение props
function Counter({ count, onMinus, onPlus }: CounterProps) {
   //const [count, setCount] = useState<number>(0);
  // 1. count - это само сотояние(state), при его изменении обновляется компонент
  // 2. setCount - это функция(setState), которая изменяет сотояние(state). Является единственным способом изменения состояния
  // 3. useState - ф-я хук(вспомогательные функции из библиотеки React для работы и манипуляции компонентами). Функция, которая
  // возвращает массив из 2 элементов: 1 эл - это состояние, а 2 - Й setState
   //const onPlus = (): void => {
   //  setCount((prevValue: number) => {
   //     prevValue + 1;
   //  });
  // };

   //const onMinus = (): void => {
   //  setCount((prevValue: number) => {
   //    return prevValue - 1;
   //  });
  // };

  return (
    <CounterWrapper>
      <ButtenControl>
        <Button name="-" onClick={onMinus} />
      </ButtenControl>
      <Count>{count}</Count>
      <ButtenControl>
        <Button name="+" onClick={onPlus} />
      </ButtenControl>
    </CounterWrapper>
  );
}

export default Counter;
