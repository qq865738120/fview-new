import Layout from "../components/Layout";
import { PureComponent } from "react";
import { inject, observer } from "mobx-react";
import AppStore from "../stores/app";
import InternalM from "../components/mobile/InternalM";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";

interface InternalProps {
  appStore: AppStore;
}

@inject("appStore")
@observer
class Internal extends PureComponent<InternalProps & WithRouterProps, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { appStore } = this.props;
    appStore.setTitle(`中联起重机${this.props.router.query.name}${this.props.router.query.index === "0" ? "驾驶室" : "操控室"}`);
  }

  render() {
    const { appStore } = this.props;

    return (
      <Layout>
        {appStore.isMobile ? <InternalM></InternalM> : <InternalM></InternalM>}
      </Layout>
    );
  }
}

export default withRouter(Internal);
