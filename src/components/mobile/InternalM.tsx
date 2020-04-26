import * as React from "react";
import { observer, inject } from "mobx-react";
import AppStore from "../../stores/app";
import PhotoSphereViewer from "photo-sphere-viewer/dist/photo-sphere-viewer";

import CarStore from "../../stores/car";
import { toJS } from "mobx";
import Link from "next/link";
import { withRouter } from "next/dist/client/router";
import { WithRouterProps } from "next/dist/client/with-router";

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
class InternalM extends React.PureComponent<
  InternalProps & WithRouterProps,
  InternalState
> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const current = this.props.router.query.name as string;
    const index = this.props.router.query.index as string;

    const { outData } = this.props.carStore;
    const data = toJS(outData);
    console.log("data", data.data[current]["int"][index].url);

    const psv = new PhotoSphereViewer({
      panorama: data.data[current]["int"][index].url,
      container: document.getElementById("viewer-360"), // 放全景图的元素
      navbar: false,
    });
  }

  render() {
    const { router } = this.props

    return (
      <section className="internal-page">
        <div id="viewer-360"></div>

        <div className="bottom-bar">
          <Link href={{ pathname: "/out", query: { name: router.query.name } }} prefetch>
            <div className="panoramic">
              <img className="panoramic-icon" src="/static/panoramic.png"></img>
              全景
            </div>
          </Link>
        </div>

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

            .bottom-bar {
              position: absolute;
              bottom: 0.3rem;
              left: 0;
              right: 0;
              z-index: 100000
            }

            .panoramic {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              font-size: 0.2rem;
              transform: rotate(90deg);
            }

            .panoramic-icon {
              width: 0.8rem;
              height: 0.8rem;
              margin-bottom: 0.1rem;
            }
          `}
        </style>
      </section>
    );
  }
}

export default withRouter(InternalM)
