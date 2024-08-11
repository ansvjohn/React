const heading = React.createElement("header",{id:"parent"},
    React.createElement("div",{id:"Child"},
        [React.createElement("h1",{},"Child Heading"),React.createElement("h1",{},"Child Heading2")]
    )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);