const App = () => {
  const inputRef = React.createRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  const copy = () => {
    inputRef.current.select();
    document.execCommand("copy");
  };

  return (
    <div>
      <textarea
        name="myTextArea"
        id="myTextArea"
        cols="30"
        rows="10"
        ref={inputRef}
      ></textarea>
      <div>
        <button onClick={copy}>Copy</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
