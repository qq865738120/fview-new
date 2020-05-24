import * as React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import "./src/public/index.css";

const IndexComponent = loadable(() =>
  import(/* webpackChunkName: "home" */ "./src/pages/index")
);
const OutComponent = loadable(() =>
  import(/* webpackChunkName: "about" */ "./src/pages/out")
);
const InternalComponent = loadable(() =>
  import(/* webpackChunkName: "about" */ "./src/pages/internal")
);

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const isWeixin = navigator.userAgent.indexOf("MicroMessenger") !== -1;
    // if (!isWeixin) {
    //   window.location.href =
    //     "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/css/wxError.html";
    // }
  }

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
