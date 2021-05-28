import React from "react";
import "./App.css";

const App = () => {
  const [details, setDetails] = React.useState([]);
  const fetchData = () => {
    try {
      fetch(`https://api.adviceslip.com/advice`)
        .then((res) => res.json())
        .then((data) => {
          setDetails(data.slip.advice);
        });
      console.log(details);
    } catch (error) {
      console.log(error);
    }
  };
  // fetchData();
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading" style={{ textTransform: "capitalize" }}>
          {details}
        </h1>
        <button className="button" onClick={fetchData}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
