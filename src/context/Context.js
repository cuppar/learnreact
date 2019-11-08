import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ThemeContext, themes } from './theme-context'

const UserContext = React.createContext('cuppar');

export default class Context extends Component {

  constructor(props) {
    super(props)

    this.state = {
      theme: themes.light,
      onToggleTheme: this.onChangeTheme,
    }
  }

  onChangeTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.light ? themes.dark : themes.light,
    }))
  }


  render() {
    return (
      <div>
        <UserContext.Provider value={`cuppar`}>
          <ThemeContext.Provider value={this.state}>
            <Toolbar />
          </ThemeContext.Provider>
        </UserContext.Provider>
      </div>
    )
  }
}

export function Toolbar(props) {
  return (
    <div>
      <UserContext.Consumer>
        {
          user => (
            <ThemedButton>from Toolbar: {user}</ThemedButton>
          )
        }
      </UserContext.Consumer>
    </div>
  )
}

/* export class ThemedButton extends Component {
  // static contextType = ThemeContext;

  render() {
    return (
      <Button theme={this.context}>{this.props.children}</Button>
    )
  }
}

ThemedButton.contextType = ThemeContext;
ThemedButton.displayName = 'ThemedButton';
ThemedButton.defaultProps = {}
ThemedButton.propTypes = {} */


export function ThemedButton(props) {
  return (
    <div>
      <ThemeContext.Consumer>
        {
          ({ theme, onToggleTheme }) => (
            <UserContext.Consumer>
              {
                user => (
                  <Button
                    {...props}
                    onClick={onToggleTheme}
                    theme={theme}>
                    {props.children}, from ThemedButton: {user}
                  </Button>
                )
              }
            </UserContext.Consumer>
          )
        }
      </ThemeContext.Consumer>
    </div>
  )
}


export function Button({ theme, onClick, children, ...props }) {
  return (
    <div>
      <button
        {...props}
        onClick={onClick}
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
          border: '1px solid red',
        }}
      >
        {children}
      </button>
    </div>
  )
}
