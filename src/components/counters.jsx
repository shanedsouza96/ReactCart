import React, { Component } from 'react'
import Counter from './counter'

class Counters extends Component {
  /*componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps)
    console.log('prevState', prevState)
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax Call and get new data from the server
    }
  }

  componentWillUnmount() {
    console.log('Counter - Unmount')
  }
  */

  render() {
    console.log('Counters - Rendered')
    const { onReset, counters, onDelete, onIncrement } = this.props
    return (
      <div>
        <button onClick={onReset} class='btn btn-primary btn-sm m-2'>
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            //value={counter.value}
            /*selected={true}*/
            //id={counter.id}
            counter={counter} //has everything we need about a counter
          />
        ))}
      </div>
    )
  }
}

export default Counters
