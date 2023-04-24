import { useState } from "react";
import "./Result.css";

export default function Result({ correct }) {
  const [money, setMoney] = useState(500);

  let moneyCounter = () => {
    setMoney(money * 2);
  };

  return (
    <div className="result">
      <ul className="result__Ul">
        <li>1. {money}</li>
        <li>2. 1000</li>
        <li>3. 2000</li>
        <li>4. 3000</li>
        <li>5. 5000</li>
        <li>6. 10000</li>
        <li>7. 15000</li>
        <li>8. 25000</li>
        <li>9. 50000</li>
        <li>10. 100000</li>
        <li>11. 200000</li>
        <li>12. 400000</li>
        <li>13. 800000</li>
        <li>14. 150000</li>
        <li>15. 3000000</li>
      </ul>
      <button onClick={moneyCounter}>Click</button>
    </div>
  );
}
