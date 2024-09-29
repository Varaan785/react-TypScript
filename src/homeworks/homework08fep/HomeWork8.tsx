import Button from "componets/Button/Button";
import Counter from "componets/Counter/Counter"
import Lesson_08 from "lessons/Lesson08/Lesson8";
import { useState } from "react";




function HomeWork08() {

    const [count, setCount] = useState<number>(0);
    const onPlus = (): void => {
        setCount((prevValue: number) => {
          return prevValue + 1;
        });
      };
   
      const onMinus = (): void => {
        setCount((prevValue: number) => {
          return prevValue - 1;
        });
      };
    return (

       /* <div> <Counter
        count={count}
        onMinus={onMinus}
        onPlus={onPlus}
        />   </div>*/

        <div> <Button 
        disable= {true}
        isDeleteVariant= {false}
        onClick={console.log}
        type="button"
        name="HW8"/>

          
          </div>
        

        
    );

   




}

export default HomeWork08