class CounterClassComponent extends React.Component {
  constructor() {
    super();
    this.state = { favoriteColor: "blue" };
  }
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ favoriteColor: "red" });
    }, 1000);
  };
  componentDidUpdate = () => {
    console.log("update!!!");
  };
  render = () => {
    return (
      <div className="center">
        <h1>
          My Favorite Color is :
          <span style={{ color: this.state.favoriteColor }}>
            {" "}
            {this.state.favoriteColor}{" "}
          </span>
        </h1>
        <button onClick={() => this.setState({ favoriteColor: "orange" })}>
          Click!!!
        </button>
      </div>
    );
  };
}

const CounterComponent = () => {
  const [favoriteColor, setFavoriteColor] = React.useState("");
  React.useEffect(() => {
    const timer = setTimeout(() => {
      console.log("This will run after 1 second!");
      setFavoriteColor(() => {
        return "blue";
      });
    }, 1000);
    document.querySelector("#myDiv").textContent =
      "The updated favorite color is " + favoriteColor;
    return () => clearTimeout(timer);
  }, [favoriteColor]);
  return (
    <div className="center">
      <h1 style={{ color: favoriteColor }}>
        My favorite color is {favoriteColor}
      </h1>
      <div id="myDiv">My div</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <CounterComponent />
      <CounterClassComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
