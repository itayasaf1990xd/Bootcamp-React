const App = () => {
  const inputRef = React.createRef();
  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <div>
        <input ref={inputRef} type="text" />
      </div>
      <div>
        <input type="number" />
      </div>
      <div>
        <input type="button" />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
