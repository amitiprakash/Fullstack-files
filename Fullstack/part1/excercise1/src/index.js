import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Header = props => {
  return <h1>{props.course}</h1>;
};

const Part = props => {
  return (
    <p>
      {props.part} {props.excercise}
    </p>
  );
};

const Content = props => {
  return (    
      <Part part={props.part.name} excercise={props.part.exercises} />    
  );
};

const Total = props => {
  return <p>Number of exercises {props.total}</p>;
};
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: "Using props to pass data",
      exercises: 7
    },
    {
      name: "State of a component",
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      
      {parts.map(part => 
        (<Content part={part} />)
      )}

      <Total
        total={parts.reduce((total, amount) => {
          total += amount.exercises;
          return total;
        }, 0)}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
