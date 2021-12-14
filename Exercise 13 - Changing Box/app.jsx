const BoxComponent = () => {
  const [counter, setCounter] = React.useState(0);
  const [color, setColor] = React.useState("");
  const [isCircle, setIsCircle] = React.useState(false);
  React.useEffect(() => {
    if (counter === 5) {
      setIsCircle(() => {
        return true;
      });
    }
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      generateColor();
      updateCounter();
    }, 1000);
    return () => clearTimeout(timer);
  }, [color]);
  const generateColor = () => {
    setColor("#" + Math.random().toString(16).substr(-6));
  };
  const updateCounter = () => {
    setCounter((counter) => {
      return counter + 1;
    });
  };
  return (
    <div className="container">
      <div
        className={`box ${isCircle && "circle"}`}
        style={{ backgroundColor: color }}
      >
        {isCircle ? "Circle" : "Box"}
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <BoxComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
