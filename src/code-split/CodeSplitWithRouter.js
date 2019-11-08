import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const Home = lazy(() => import('./routes/Home'))
const About = lazy(() => import('./DefaultExportAbout'))

const pages = [
  { path: '/CodeSplitWithRouter', name: 'Home', component: Home, exact: true },
  { path: '/CodeSplitWithRouter/About', name: 'About', component: About },
];

const links = pages.map(page => (
  <li key={page.path}>
    <Link to={page.path}>{page.name}</Link>
  </li>
))

const routes = pages.map(page => (
  <Suspense fallback={<div>{`${page.name} Loading...`}</div>}>
    <Route exact={page.exact} path={page.path} component={page.component} />
  </Suspense>
))

export default class CodeSplitWithRouter extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="CodeSplitWithRouter-link-list">{links}</ul>
          <Switch>
            <div className="CodeSplitWithRouter-panel-container">
              {routes}
            </div>
          </Switch>
      </React.Fragment>
    )
  }
}
