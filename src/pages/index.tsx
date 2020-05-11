import Layout from "../components/Layout";
import { PureComponent } from "react";
import { inject, observer } from "mobx-react";
import AppStore from "../stores/app";
import IndexM from "../components/mobile/IndexM";

interface IndexProps {
  appStore: AppStore
}

@inject("appStore")
@observer
export default class Index extends PureComponent<IndexProps, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { appStore } = this.props
    appStore.setTitle("中联重科起重机VR全景看车")
  }

  render() {
    const { appStore } = this.props

    return <Layout>
      {/* { appStore.isMobile ? <IndexM></IndexM> : <IndexM></IndexM> } */}
      <IndexM />
    </Layout>
  }
}
