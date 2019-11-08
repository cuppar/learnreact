import React, { Component, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const CodeSplitWithRouter = lazy(() => import('./code-split'));
const Context = lazy(() => import('./context'));
const ErrorBoundary = lazy(() => import('./error-boundary'));

const demos = [
  { path: '/', name: '首页', component: () => <div>首页</div>, exact: true },
  { path: '/CodeSplitWithRouter', name: '代码分割', component: CodeSplitWithRouter },
  { path: '/Context', name: 'Context', component: Context },
  { path: '/ErrorBoundary', name: 'ErrorBoundary', component: ErrorBoundary },
];

const links = demos.map(demo => (
  <li key={demo.path}>
    <Link to={demo.path}>{demo.name}</Link>
  </li>
))

const routes = demos.map(demo => (
  <Suspense key={demo.path} fallback={<div>{`${demo.name} Loading...`}</div>}>
    <Route exact={demo.exact} path={demo.path} component={demo.component} />
  </Suspense>
))

export default class Layout extends Component {
  render() {
    return (
      <div className="Layout">
        <Router>
          <ul className="Layout-link-list">{links}</ul>
          <Switch>
            <div className="Layout-panel-container">
              {routes}
            </div>
          </Switch>
        </Router>
      </div>
    )
  }
}
