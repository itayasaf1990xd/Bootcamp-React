const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Johnny",
    birthday: "1-10-1992",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

class Names extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.names.map((e, i) => {
            return <li key={i}>{e}</li>;
          })}
        </ul>
      </div>
    );
  }
}

class Birthday extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.birthday.map((e, i) => {
          return (
            <div className="card" key={i}>
              {e.name}
              <br />
              {e.birthday}
              <br />
              {e.favoriteFoods.meats.map((food) => {
                return (
                  <p>
                    meats: <br /> {food}
                  </p>
                );
              })}
              {e.favoriteFoods.fish.map((food) => {
                return (
                  <p>
                    {" "}
                    fish: <br /> {food}
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    names: [],
    birthday: [],
  };
  showData = async () => {
    await this.setState({
      names: data.map((element) => {
        return element.name;
      }),
      birthday: data.filter((element) => {
        return +element.birthday.slice(-4) >= 1990;
      }),
    });
    console.log(this.state.birthday);
  };

  render() {
    return (
      <div>
        <button
          onClick={(e) => {
            this.showData();
          }}
        >
          click
        </button>
        <Names names={this.state.names} />
        <Birthday birthday={this.state.birthday} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
