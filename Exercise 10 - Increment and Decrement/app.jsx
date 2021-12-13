const CounterComponent = () => {
  const [count, setCount] = React.useState(0);
  const handleColor = () => {
    if (count > 0) {
      return "green";
    }
    if (count < 0) {
      return "red";
    }
    return "black";
  };

  const handleCount = (type) => {
    if (type === "increment" && count < 10) {
      setCount(count + 1);
    } else if (type === "decrement" && count > -10) {
      setCount(count - 1);
    }
  };
  return (
    <div className="container">
      <div>
        <button onClick={() => handleCount("increment")}>increment</button>
        <button onClick={() => handleCount("decrement")}>decrement</button>
      </div>
      <label className={handleColor()}>{count}</label>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <CounterComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
