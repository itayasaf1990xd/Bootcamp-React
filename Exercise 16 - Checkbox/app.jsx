const Checkbox = ({ content, checked }) => {
  return (
    <div>
      <input type="checkbox" id="scales" name="scales" defaultChecked={checked ? true : false}/>
      <label>{content}</label>
    </div>
  );
};

const App = () => {
  const checkboxArray = [
    {
      id: 0,
      content: "I read the term of the app",
      checked: false,
    },
    {
      id: 1,
      content: "I accept the term of the app",
      checked: false,
    },
    {
      id: 2,
      content: "I want to get the weekly news letter",
      checked: true,
    },
    {
      id: 3,
      content: "I want to get sales and offers",
      checked: true,
    },
  ];
  return (
    <div className="container">
      {checkboxArray.map((checkbox) => {
        return (
          <Checkbox
            key={checkbox.id}
            content={checkbox.content}
            checked={checkbox.checked}
          />
        );
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
