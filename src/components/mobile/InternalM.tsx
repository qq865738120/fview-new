import * as React from "react";
import { observer, inject } from "mobx-react";
import AppStore from "../../stores/app";
import PhotoSphereViewer from "photo-sphere-viewer/dist/photo-sphere-viewer";

import CarStore from "../../stores/car";
import { toJS } from "mobx";
import Link from "next/link";
import { withRouter } from "next/dist/client/router";
import { WithRouterProps } from "next/dist/client/with-router";
import utils from "../../utils";

interface InternalProps {
  appStore?: AppStore;
  carStore?: CarStore;
}

let timerId = null;

@inject("appStore")
@inject("carStore")
@observer
class InternalM extends React.PureComponent<
  InternalProps & WithRouterProps,
  any
> {
  constructor(props) {
    super(props);
    this.state = {
      panoramicStyle: {},
    };
  }

  componentDidMount() {

    timerId = setInterval(() => {
      document.body.addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault(); //阻止默认事件(上下滑动)
        },
        { passive: false }
      );
      document.getElementById("viewer-360").addEventListener(
        "touchmove",
        (e) => {
          e.preventDefault(); //阻止默认事件(上下滑动)
        },
        { passive: false }
      );
    }, 100);

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

    setTimeout(() => {
      this.resize();
      window.addEventListener("resize", () => {
        this.resize();
      });
    }, 0);
  }

  componentWillUnmount() {
    clearInterval(timerId);
    timerId = null;
  }

  resize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (width > height) {
      //横屏
      this.setState({
        panoramicStyle: {
          transform: `rotate(0deg)`,
        },
      });
    } else {
      //竖屏
      this.setState({
        panoramicStyle: {
          transform: `rotate(0deg)`,
        },
      });
    }
  }

  onOutClick() {
    window.location.href = `/out?name=${utils.getQuery("name") || ""}`;
  }

  render() {
    const { router } = this.props;
    const { panoramicStyle } = this.state;

    return (
      <section className="internal-page">
        <div id="viewer-360"></div>

        <div className="bottom-bar">
          <div
            onClick={this.onOutClick}
            className="panoramic"
            style={{ ...panoramicStyle }}
          >
            <img className="panoramic-icon" src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/panoramic.png"></img>
            全景
          </div>
        </div>

        <style jsx>
          {`
            .internal-page {
              width: 100vw;
              height: 100vh;
              overflow: hidden;
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
              z-index: 100000;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .panoramic {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              font-size: 0.2rem;
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

export default withRouter(InternalM);
