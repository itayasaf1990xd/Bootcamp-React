class Spinner extends React.Component {
  state = { spinnerDisplay: false };

  componentDidMount() {
    this.setState(() => {
      return { spinnerDisplay: true };
    });
    setTimeout(() => {
      this.setState(() => {
        return { spinnerDisplay: false };
      });
    }, 5000);
  }

  renderContent() {
    if (this.state.spinnerDisplay) {
      return (
        <div className="dots">
          <div className="dot hop"></div>
          <div className="dot hop delay1"></div>
          <div className="dot hop delay2"></div>
        </div>
      );
    } else {
      return null;
    }
  }

  render = () => {
    return <div>{this.renderContent()}</div>;
  };
}

const SpinnerComponent = () => {
  const [isShow, setIsShow] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsShow(() => {
        return false;
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={isShow ? "container" : "hide"}>
      <div className="dots">
        <div className="dot hop"></div>
        <div className="dot hop delay1"></div>
        <div className="dot hop delay2"></div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="container">
      <Spinner />
      <SpinnerComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
