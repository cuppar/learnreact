import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
    }
  }

  static getDerivedStateFromError(error) {
    // this.setState({ error })
    return { error }
  }

  componentDidCatch(error, errorInfo) {
    console.log('error :', error);
    console.log('errorInfo.componentStack :', errorInfo.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          出现错误了: {this.state.error.toString()}
        </div>
      )
    }

    return this.props.children;
  }
}