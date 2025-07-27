const head = React.createElement(
   // heading is an react element like an  obj, its create an obj
   "h1",
   { id: "head" }, // attribute for h1 tag
   "Hello shaina"); //children for h1 tag both are props

const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root2.render(head);  //convert in html tag and put it in brow/dom


//nested div
   
const parent = React.createElement("div",
   { id: "parent" },
   React.createElement("div",
      { id: "child" },
    [React.createElement("h2",  {},"hlo react"),
     React.createElement("h2",  {},"hlo react2"),
    ]
     )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);