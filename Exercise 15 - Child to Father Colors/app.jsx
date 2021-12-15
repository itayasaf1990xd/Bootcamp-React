const Button = ({ color, callBack, id }) => {
  return (
    <div>
      <button
        onClick={(e) => callBack(e.target.textContent)}
        style={{
          color: "white",
          background: color,
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
      >
        {color}
      </button>
    </div>
  );
};

const colors = [
  { color: "blue", id: 0 },
  { color: "red", id: 1 },
  { color: "yellow", id: 2 },
  { color: "green", id: 3 },
];

const App = () => {
  const [selectedColor, setSelectedColor] = React.useState("");
  const updateColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>The color selected is : {selectedColor}</h1>
      {colors.map((btn) => {
        return (
          <Button
            callBack={updateColor}
            id={btn.id}
            key={btn.id}
            color={btn.color}
          />
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
