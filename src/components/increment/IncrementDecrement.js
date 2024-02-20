import React from 'react';

class Counter extends React.Component {
  state = { count: 0 }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  // decrement = () => {
  //   this.setState({
  //     count: this.state.count - 1
  //   });
  // }

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1
      });
    }
  }

  render() {
    return (
      <div id=''>
        
          <div id='count' className='py-16'>
        <div className='w-9/12 mx-auto'>
        <h1 className='text-4xl font-medium mb-8'>Click +1 increment</h1>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}> - </button>
          <span>{this.state.count}</span>
          <button onClick={this.increment}> + </button>
        </div>
      </div>
      </div>
      </div>
    )
  }
}

export default Counter;