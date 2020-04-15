import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = props => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const Header = ({ text }) => (
  <div>
    <h1>{text}</h1>
  </div>
);

const Anecdote = props => {
  return (
    <div>
      <p>{props.text}</p>
      <p>has {props.vote} votes</p>
    </div>
  );
};

const App = ({ anecdotes }) => {
  const initialVotes = Array(anecdotes.length).fill(0);
  const [selected, setSelected] = useState(0);
  const [votes, setVote] = useState(initialVotes);

  const showRandomAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const setVoteForAnecdote = () => {
    let votesCopy = [...votes];
    votesCopy[selected] += 1;
    setVote(votesCopy);
  };

  const maxVotes = Math.max(...votes);
  const mostVoted = anecdotes[votes.indexOf(maxVotes)];
  
  return (

    <div>
      <Header text="Anecdote of the day" />
      <Anecdote text={anecdotes[selected]} vote={votes[selected]} />
      <Button onClick={setVoteForAnecdote} text="vote" />
      <Button onClick={showRandomAnecdote} text="next anecdote" />

      <Header text="Anecdote with most votes" />
      <Anecdote text={mostVoted} vote={maxVotes} />
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
