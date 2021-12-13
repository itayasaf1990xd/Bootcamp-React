const CardComponent = ({ image, title, description, links }) => (
  <div className="card">
    <img className="image" src={image} alt="random image" />
    <div className="card-content">
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <div className="links-container">
        <a className="link" href={links[0].href} target="_blank">
          {links[0].name}
        </a>
        <a className="link" href={links[1].href} target="_blank">
          {links[1].name}
        </a>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="container">
      <CardComponent
        image="https://picsum.photos/300/200?random=1"
        title="Random Title 01"
        description="A random description 01"
        links={[
          { name: "Share", href: "https://www.google.com/" },
          { name: "Explore", href: "https://www.bing.com/" },
        ]}
      />
      <CardComponent
        image="https://picsum.photos/300/200?random=2"
        title="Random Title 02"
        description="A random description 02"
        links={[
          { name: "Buy", href: "https://www.microsoft.com/" },
          { name: "Sell", href: "https://www.amazon.com/" },
        ]}
      />
      <CardComponent
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
