import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement("h1",
//     {id: "heading"},
//     "namaste react"
// )

// const jsxheading = <h1 id="heading">namaste react jsx</h1>;

const title = (
    <h1 className="head" tabIndex="5">
      Namaste React using JSX
    </h1>
  );

var HeadingComponent = () => (
    <div id="container">
        {title}
        <h1 className="heading">Namaste react functional component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
