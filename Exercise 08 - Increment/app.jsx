const CounterComponent = () => {
  const [count, setCount] = React.useState(0);
  const handleCount = (type) => {
    if (type === "increment") {
      setCount((count) => {
        return count + 1;
      });
    } else {
      setCount((count) => {
        return count - 1;
      });
    }
  };
  return (
    <div className="container">
      <div>
        <button onClick={() => handleCount("increment")}>increment</button>
        <button onClick={() => handleCount("decrement")}>decrement</button>
      </div>
      <label>{count}</label>
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
