import * as React from "react";
import CommonLoading from "react-loadingg/lib/CommonLoading";

export default class Loading extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
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
      </section>
    );
  }
}
