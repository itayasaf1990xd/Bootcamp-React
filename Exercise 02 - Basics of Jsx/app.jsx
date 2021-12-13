const App = () => {
  // 1
  const data = ["hello", "world"];
  // 2
  const number1 = 5;
  const number2 = 6;
  // 3
  const string = "I love React!";

  return (
    <div className="App">
      {/* 1 */}
      <p>{`${data[0].charAt(0).toUpperCase() + data[0].substring(1)} ${data[1].charAt(0).toUpperCase() + data[1].substring(1)}`}</p>
      {/* 2 */}
      <p>{`${number1} + ${number2} = ${number1 + number2}`}</p>
      {/* 3 */}
      <p>{`The string’s "${string}" length is ${string.length}`}</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
