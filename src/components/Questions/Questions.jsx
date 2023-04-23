import "./Questions.css";

/*Компонента получает вопрос из массива вопросов и ф-ю которая при 
клике на ответ будет выводить следующий вопрос*/
export default function Questions({ question, onClickVariant }) {
  return (
    <div className="windowGame">
      <div className="questionGame">{question.title}</div>
      <ul className="answerOptions">
        {question.variants.map((item, index) => (
          <li key={item} onClick={() => onClickVariant(index)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/*<div class="questionGame"></div>
      <div>
        <form action="" class="answerOptions">
          <div class="colomn1">
            <button id="button A" type="button"></button>
            <button id="button B" type="button"></button>
          </div>
          <div class="colomn2">
            <button id="button C" type="button"></button>
            <button id="button D" type="button"></button>
          </div>
        </form>
      </div> */
