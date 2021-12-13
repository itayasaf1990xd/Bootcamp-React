const BoxOneComponent = () => (
    <div className="green-background">
      <BoxTwoComponent />
    </div>
);

const BoxTwoComponent = () => (
  <div className="blue-background">
    <BoxThreeComponent />
  </div>
);

const BoxThreeComponent = () => (
  <div className="pink-background">
    <BoxFourComponent />
    <BoxFourComponent />
  </div>
);

const BoxFourComponent = () => <div className="purple-background"></div>;

const App = () => (
  <div className="app-container">
    <BoxOneComponent />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
