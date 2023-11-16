import React from "react";

let checkbox = document.querySelector("input[id=theme-checkbox]");
checkbox.addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.toggle("light");
  } else{
    document.body.classList.remove('light');
  }
});

function Calculator() {

  const [result, setResult] = React.useState("");
  const [numbers, setNumbers] = React.useState("");

  const actions = ["/", "*", "-", "+","."];

  const calculate = (e) => {
    const value = e.target.name;

    if( actions.includes(value) && result === "" || 
        actions.includes(value) && actions.includes(result.slice(-1))
    ){
      return;
    }
    setResult(result + value);
    
  };

  const clear = () => {
    setResult("");
    setNumbers("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const evaluate = () => {
    setNumbers(result);
    setResult(eval(result).toString());
  };

  return (
    <div className="container">
      <form className="screen">
        <p className="firstText">{numbers}</p>
        <p className="secondText">{result || "0"}</p>
      </form>

      <div className="buttons">
        <button onClick={clear} name="ac" aria-label="clear-screen" className="ac">
          Ac
        </button>
        <button onClick={backspace} name="delete" aria-label="backspace" className="delete">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-backspace"
            viewBox="0 0 16 16"
          >
            <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
            <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
          </svg>
        </button>
        <button onClick={calculate} name="/" aria-label="Divide" className="blue">
          &divide;
        </button>
        <button onClick={calculate} name="*" aria-label="Multiply" className="blue">
          &times;
        </button>
        <button onClick={calculate} name="7">
          7
        </button>
        <button onClick={calculate} name="8">
          8
        </button>
        <button onClick={calculate} name="9">
          9
        </button>
        <button onClick={calculate} name="-" aria-label="Subtract" className="blue minus">
          &minus;
        </button>
        <button onClick={calculate} name="4">
          4
        </button>
        <button onClick={calculate} name="5">
          5
        </button>
        <button onClick={calculate} name="6">
          6
        </button>
        <button onClick={calculate} name="+" aria-label="Add" className="blue plus">
          +
        </button>
        <button onClick={calculate} name="1">
          1
        </button>
        <button onClick={calculate} name="2">
          2
        </button>
        <button onClick={calculate} name="3">
          3
        </button>
        <button onClick={evaluate} aria-label="evaluate" className="equal">
          =
        </button>
        <button onClick={calculate} name="0" className="zero">
          0
        </button>
        <button onClick={calculate} name=".">
          .
        </button>
      </div>
    </div>
  );
}

export default Calculator;
