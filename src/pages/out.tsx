import Layout from "../components/Layout";
import { PureComponent } from "react";
import { inject, observer } from "mobx-react";
import AppStore from "../stores/app";
import InternalM from "../components/mobile/InternalM";
import OutM from "../components/mobile/OutM";

interface OutProps {
  appStore: AppStore
}

@inject("appStore")
@observer
export default class Out extends PureComponent<OutProps, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { appStore } = this.props
    appStore.setTitle("内饰")
  }

  render() {
    const { appStore } = this.props

    return <Layout>
      { appStore.isMobile ? <OutM></OutM> : <OutM></OutM> }
    </Layout>
  }
}
