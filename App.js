// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello From Raect"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
  "h1",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "sibling-1" }, "i am h1 tag"),
    React.createElement("h2", { id: "sibling-2" }, "i am h2 tag"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
