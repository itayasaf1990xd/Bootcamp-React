class CardClassComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     image: props.image,
  //     title: props.title,
  //     description: props.description,
  //     links: props.links,
  //   };
  // }
  // this.state
  render() {
    return (
      <div className="card">
        <img className="image" src={this.props.image} alt="random image" />
        <div className="card-content">
          <h2 className="title">{this.props.title}</h2>
          <p className="description">{this.props.description}</p>
          <div className="links-container">
            <a className="link" href={this.props.links[0].href} target="_blank">
              {this.props.links[0].name}
            </a>
            <a className="link" href={this.props.links[1].href} target="_blank">
              {this.props.links[1].name}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const App = () => {
  return (
    <div className="container">
      <CardClassComponent
        image="https://picsum.photos/300/200?random=1"
        title="Random Title 01"
        description="A random description 01"
        links={[
          { name: "Share", href: "https://www.google.com/" },
          { name: "Explore", href: "https://www.bing.com/" },
        ]}
      />
      <CardClassComponent
        image="https://picsum.photos/300/200?random=2"
        title="Random Title 02"
        description="A random description 02"
        links={[
          { name: "Buy", href: "https://www.microsoft.com/" },
          { name: "Sell", href: "https://www.amazon.com/" },
        ]}
      />
      <CardClassComponent
        image="https://picsum.photos/300/200?random=3"
        title="Random Title 03"
        description="A random description 03"
        links={[
          { name: "Order", href: "https://www.msn.com/" },
          { name: "Click", href: "https://www.google.com/" },
        ]}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
