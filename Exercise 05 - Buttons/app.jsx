const ButtonComponent = ({ text, style }) => (
  <button className={style}>{text}</button>
);

const App = () => (
  <div className="container">
    <ButtonComponent text="Important" style="important" />
    <ButtonComponent text="Not Important" style="not-important" />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
