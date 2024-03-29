import { useState } from 'react'

const Header = (props) => <div><h1>{props.text}</h1></div>

const Text = (props) => <div>{props.text}</div>

const Vote = (props) => {
  console.log(props)
  return <div>has {props.vote} votes</div>
}

const Button = (props) => {
  console.log(props)
  return <button onClick={props.handleClick}>
    {props.text}
  </button>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const setCopy = () => {
    const copy = [...votes]
    copy[selected]++
    setVotes(copy)
  }

  const mostVotes = () => {
    const indexMaxVotes = votes.indexOf(Math.max(...votes))
    console.log(indexMaxVotes)
    return indexMaxVotes
  }
  
  return (
    <div>
      <Header text={'Anecdote of the day'} />
      <Text text={anecdotes[selected]} />
      <Vote vote={votes[selected]} />
      <Button handleClick={setCopy} text='Vote'/>
      <Button handleClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))} text='next anecdote' />
      <Header text={'Anecdote with most votes'} />
      <Text text={anecdotes[mostVotes()]} />
      <Vote vote={votes[mostVotes()]} />
    </div>
  )
}

export default App