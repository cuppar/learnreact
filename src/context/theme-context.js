import React from 'react';

export const themes = {
  dark: {
    background: '#999',
    foreground: '#fff',
  },
  light: {
    background: '#eee',
    foreground: '#111',
  },
}

export const ThemeContext = React.createContext({
  theme: themes.light,
  onToggleTheme: () => { },
});
