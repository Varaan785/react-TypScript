


import GlobalStyles from 'styles/GlobalStayles';

//HOMEWORKS
import Homework06 from 'homeworks/homework06/Homework_06';
import Homework_07 from 'homeworks/homework07fep/HomeWork07fep';



//LESSONS
import Lesson_06 from 'lessons/Lesson06/Lesson06';
import Lesson07 from 'lessons/Lesson07/Lesson7';
import Lesson_08 from 'lessons/Lesson08/Lesson8';



//CONSULTATIONS



import './App.css';
import Feedback from 'componets/Feedback/Feedback';
import Consultation_03 from 'consultations/Consultation_03/Consultation_03';





function App() {
  return (
   <>
    Consultation
    <Consultation_03/>




    Lesson 
    <Lesson_06/>
    <Lesson07 />
    <Lesson_08/>




    HomeWork
    <Homework_07/>
    <Homework06 />
    
    
    
    
    
    
    
    
    
    
    
    
  </>
  );
}

export default App;
