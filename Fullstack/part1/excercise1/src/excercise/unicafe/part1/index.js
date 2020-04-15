import React, { useState } from "react";
import ReactDOM from "react-dom";

const Statistics = ({stats}) => {
  if (stats.all.value === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody>
        {
            Object.values(stats).map((val,index) => <Statistic key={index} text={val.text} value={val.value} />)
        }
       
      </tbody>
    </table>
  );
};

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Statistic = props => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const sum = good * 1 + bad * -1;
  const average = sum / all || 0;
  const positive = `${(good / all) * 100 || 0} %`;

  const stats ={
    good: { text: 'Good', value: good },
    neutral: { text: 'Neutral', value: neutral },
    bad: { text: 'Bad', value: bad },
    all: { text: 'All', value: all },
    average: { text: 'Average', value: average },
    positive: { text: 'Positive', value: positive }
  };
  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />

      <h1>Statistics</h1>

      <Statistics stats = {stats} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
