import "./Result.css";

export default function Result({ correct }) {
  return (
    <div className="result">
      <div>Вы отгадали : {correct}</div>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}
