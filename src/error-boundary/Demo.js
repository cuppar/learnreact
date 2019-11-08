import React, { Component } from 'react'
import ErrorBoundary from './ErrorBoundary'

export class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }))
  }
  render() {

    if (this.state.count === 5) {
      throw new Error('我崩溃了！');
    }

    return (
      <div>
        <h2>When count is 5, it will throw a error.</h2>
        <button onClick={this.handleClick}>count: {this.state.count}</button>
      </div>
    )
  }
}

export default class Demo extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Counter />
        </ErrorBoundary>
      </div>
    )
  }
}
