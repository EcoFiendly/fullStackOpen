import { useState } from 'react'

const Section = (props) => <div><h1>{props.section}</h1></div>

const Display = (props) => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const feedback = "give feedback"
  const statistics = "statistics"
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Section section={feedback} />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      {/* <Button handleClick={() =>} */}
      <Section section={statistics} />
      <Display value={good} text='good'/>
      <Display value={neutral} text='neutral'/>
      <Display value={bad} text='bad'/>
      <Display value={good + neutral + bad} text='all' />
      <Display value={(good - bad) / (good + neutral + bad)} text='average' />
      <Display value={good * 100 / (good + neutral + bad) + '%'} text='positive'/>
    </div>
  )
}

export default App