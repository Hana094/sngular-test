import { useContext } from "react";
import { NumberContext } from "../Hooks/NumberContext";
import { preventNotNumberCharacter } from "../Common/inputFuctions";

export default function Form() {
  const { setNumber } = useContext(NumberContext);
  function calculateSeries(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const number = parseInt(formData.get("number"), 10);
    setNumber(number);
  }
  return (
    <div className="form-container">
      <h1>Sngular Test</h1>
      <div>
        <form onSubmit={calculateSeries}>
          <input
            type="number"
            name="number"
            onKeyDown={preventNotNumberCharacter}
          ></input>
          <button>Calculate</button>
        </form>
      </div>
    </div>
  );
}
