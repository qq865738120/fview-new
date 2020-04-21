import Layout from "../components/Layout";
import { PureComponent } from "react";
import { inject, observer } from "mobx-react";
import AppStore from "../stores/app";
import InternalM from "../components/mobile/InternalM";

interface InternalProps {
  appStore: AppStore
}

@inject("appStore")
@observer
export default class Internal extends PureComponent<InternalProps, any> {
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
      { appStore.isMobile ? <InternalM></InternalM> : <InternalM></InternalM> }
    </Layout>
  }
}
