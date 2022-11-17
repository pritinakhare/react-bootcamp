
const h1 = React.createElement(
    "h1", 
    { class:"headingclass" },
    "This code is created by React"
  );

  const div = React.createElement(
    "div", 
    { className: "democlass", },
    "Welcome to Namaste Rect BootCamp",
    h1
  );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);