import React from "react";
import "./App.css";
import Questions from "./components/Questions/Questions";
import Result from "./components/Result/Result";
import Timer from "./components/Timer/Timer";
import { useState } from "react";

const questions = [
  {
    title: "Сколько сердец у осьминога?",
    variants: ["1", "2", "3", "4"],
    correct: 2,
  },
  {
    title: "Как меня зовут?",
    variants: ["Марк", "Евгений", "Вова", "Саша"],
    correct: 1,
  },
  {
    title: "Какая самая большая планета в солнечной системе?",
    variants: ["Юпитер", "Сатурн", "Марс", "Плутон"],
    correct: 0,
  },
];

function App() {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const question = questions[step];

  /*При клике на ответ ф-я переключает step (это индекс номера вопроса) на след вопр
  Дальше мы сравниваем если индекс variants будет равен question.correct, то увеличиваем счетчик на 1  */
  const onClickVariant = (index) => {
    console.log(step);
    setStep(step + 1);
    if (index === question.correct) {
      setCorrect(correct + 1);
    } else {
    }
  };

  return (
    <div className="backgroundGame">
      <Timer />
      <Questions question={question} onClickVariant={onClickVariant} />
      <Result className="result" correct={correct} />
    </div>
  );
}

export default App;

// Math.floor(Math.random() * questions.length
