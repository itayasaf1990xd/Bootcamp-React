class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationClass: "",
    };
  }
  componentDidMount = () => {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({
        animationClass: "Box-show",
      });
    }, 1000);
  };

  render = () => {
    return (
      <div
        className={`${this.state.animationClass}`}
        style={{
          width: this.props.size,
          height: this.props.size,
          background: "red",
          marginBottom: "10px",
        }}
      ></div>
    );
  };
}

const BoxAnimationComponent = ({ id, size, color }) => {
  const [isShow, setIsShow] = React.useState(false);
  React.useEffect(() => {
    if (!isShow) {
      const timer = setTimeout(() => {
        console.log("This will run after 1 second!");
        setIsShow(() => {
          return true;
        });
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        console.log("This will run after 4 second!");
        setIsShow(() => {
          return false;
        });
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isShow]);
  return (
    <div
      className={`box ${isShow && " show"}`}
      style={{ color: "white", background: color, width: size, height: size }}
    >
      Box{id}
    </div>
  );
};

const App = () => {
  const data = [
    {
      id: 0,
      size: "150px",
      color: "blue",
    },
    {
      id: 1,
      size: "200px",
      color: "red",
    },
    {
      id: 2,
      size: "250px",
      color: "black",
    },
  ];

  const boxArray = [
    {
      id: 0,
      size: "100px",
    },
    {
      id: 1,
      size: "75px",
    },
    {
      id: 2,
      size: "125px",
    },
    {
      id: 3,
      size: "150px",
    },
  ];

  return (
    <div>
      <div className="container">
        {data.map((box) => {
          return (
            <BoxAnimationComponent
              key={box.id}
              id={box.id}
              size={box.size}
              color={box.color}
            />
          );
        })}
      </div>
      <div>
        {boxArray.map((box) => {
          return <Box key={box.id} size={box.size} />;
        })}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
