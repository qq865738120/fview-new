import Layout from "../components/Layout";
import { PureComponent } from "react";
import { inject, observer } from "mobx-react";
import AppStore from "../stores/app";
import InternalM from "../components/mobile/InternalM";
import OutM from "../components/mobile/OutM";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";

interface OutProps {
  appStore: AppStore
}

@inject("appStore")
@observer
class Out extends PureComponent<OutProps & WithRouterProps, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { appStore } = this.props
    appStore.setTitle(`中联起重机${this.props.router.query.name}全景展示`)
  }

  render() {
    const { appStore } = this.props

    return <Layout>
      { appStore.isMobile ? <OutM></OutM> : <OutM></OutM> }
    </Layout>
  }
}

export default withRouter(Out)