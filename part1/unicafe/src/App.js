import { useState } from 'react'

const Section = (props) => <div><h1>{props.section}</h1></div>

const StatisticLine = (props) => <div>{props.text} {props.value}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  if (!props.value[0] && !props.value[1] && !props.value[2]) {
    return (
      <div>No feedback given</div>
    )
  } else {
    return (
      <table>
        <tbody>
          <tr><td><StatisticLine value={props.value[0]} text='good'/></td></tr>
          <tr><td><StatisticLine value={props.value[1]} text='neutral'/></td></tr>
          <tr><td><StatisticLine value={props.value[2]} text='bad'/></td></tr>
          <tr><td><StatisticLine value={props.value[0] + props.value[1] + props.value[2]} text='all' /></td></tr>
          <tr><td><StatisticLine value={(props.value[0] - props.value[2]) / (props.value[0] + props.value[1] + props.value[2])} text='average' /></td></tr>
          <tr><td><StatisticLine value={props.value[0] * 100 / (props.value[0] + props.value[1] + props.value[2]) + '%'} text='positive' /></td></tr>
        </tbody>
      </table>
    )
   }
}

const App = () => {
  const feedback = "give feedback"
  const stats = "statistics"
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
      <Section section={stats} />
      <Statistics value={[good, neutral, bad]} />
    </div>
  )
}

export default App