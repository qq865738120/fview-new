import * as React from "react";
import CommonLoading from "react-loadingg/lib/CommonLoading";
import ReactDOM from "react-dom";

export default class Loading extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    const dom = document.getElementsByClassName("app")[0];
    if (dom) {
      dom.style = "filter: blur(0.4rem)";
    }
  }

  componentWillUnmount() {
    const dom = document.getElementsByClassName("app")[0];
    if (dom) {
      dom.style = "";
    }
  }

  render() {
    return ReactDOM.createPortal(
      <section
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.7)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10000,
        }}
      >
        <CommonLoading color="#93C656" size="large" />
      </section>,
      document.getElementById("root") as Element
    );
  }
}
