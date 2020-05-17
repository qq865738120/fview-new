import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import "./src/public/index.css";

const IndexComponent = loadable(() =>
  import(/* webpackChunkName: "home" */ "./src/pages/Index")
);
const OutComponent = loadable(() =>
  import(/* webpackChunkName: "about" */ "./src/pages/Out")
);
const InternalComponent = loadable(() =>
  import(/* webpackChunkName: "about" */ "./src/pages/Internal")
);

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="app">
        <Router>
          <Route exact path="/" component={IndexComponent}></Route>
          <Route exact path="/out" component={OutComponent}></Route>
          <Route exact path="/internal" component={InternalComponent}></Route>
        </Router>
      </div>
    );
  }
}

export default App;
