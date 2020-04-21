import * as React from "react";
import { observer, inject } from "mobx-react";
import AppStore from "../../stores/app";
import PhotoSphereViewer from "photo-sphere-viewer/dist/photo-sphere-viewer.js";
import CarStore from "../../stores/car";
import { toJS } from "mobx";

interface InternalProps {
  appStore?: AppStore;
  carStore?: CarStore;
}

interface InternalState {
  store: AppStore;
}

@inject("appStore")
@inject("carStore")
@observer
export default class InternalM extends React.PureComponent<
  InternalProps,
  InternalState
> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const current = "ZTC350H";
    const index = 0;

    const { outData } = this.props.carStore;
    const data = toJS(outData);
    console.log("data", data.data[current]["int"][index].url);

    const psv = new PhotoSphereViewer({
      // panorama: data.data[current]["int"][index].url,
      panorama: "https://zwj-test.bj.bcebos.com/test-3d.jpg?authorization=bce-auth-v1/e0202c39b4d044dc8bea53bef849eb98/2020-04-21T15:40:30Z/300/host/b5fdf9f3ff6d07b0d157bbb69babad7f3cd44a3f1b48636381fb12e7cfcaaed9",
      container: document.getElementById("viewer-360"), // 放全景图的元素
      navbar: false,
    });
  }

  render() {
    return (
      <section className="internal-page">
        <div id="viewer-360"></div>

        <style jsx>
          {`
            .internal-page {
              width: 100vw;
              height: 100vh;
            }

            #viewer-360 {
              width: 100%;
              height: 100%;
            }
          `}
        </style>
      </section>
    );
  }
}
