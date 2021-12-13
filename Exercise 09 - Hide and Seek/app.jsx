function HideShowBox() {
  const [isHide, setIsHide] = React.useState(false);

  function toggleBox() {
    setIsHide(!isHide);
  }

  return (
    <div className="container">
      <button className="button" onClick={toggleBox}>{isHide ? " Show" : "Hide"}</button>
      <div className={"box" + (isHide ? " hide" : "")}></div>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <HideShowBox />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
