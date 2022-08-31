const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Killan",
      animal: "Cat",
      breed: "Bombay",
    }),
    React.createElement(Pet, {
      name: "Angel",
      animal: "Dog",
      breed: "Golden Retriever",
    }),
    React.createElement(Pet, {
      name: "Mac",
      animal: "Dog",
      breed: "Golden Doodle",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
