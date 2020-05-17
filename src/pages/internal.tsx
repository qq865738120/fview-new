import * as React from "react";
import { Viewer } from "photo-sphere-viewer";
import utils from "../public/js/utils";
import MokeData from "../public/moke";

class Internal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      panoramicStyle: {},
    };
  }

  componentDidMount() {
    const current = utils.getQuery("name") as string;
    const index = utils.getQuery("index") as string;

    document.title = `中联起重机${current}${
      index === "0" ? "驾驶室" : "操控室"
    }`;

    const outData = new MokeData().getOutList();
    console.log("data", outData[current]["int"][index].url);

    document.body.addEventListener("touchmove", this.moveEvent, {
      passive: false,
    });
    const barDom = document.getElementById("bottom-bar");
    barDom &&
      barDom.addEventListener("touchmove", this.moveEvent, { passive: false });

    new Viewer({
      panorama: outData[current]["int"][index].url,
      container: document.getElementById("viewer-360"), // 放全景图的元素
      navbar: false,
      fisheye: true,
    });

    setTimeout(() => {
      this.resize();
      window.addEventListener("resize", () => {
        this.resize();
      });
    }, 0);
  }

  componentWillUnmount() {
    const barDom = document.getElementById("bottom-bar");
    barDom && barDom.removeEventListener("touchmove", this.moveEvent);
    document.body.removeEventListener("touchmove", this.moveEvent);
  }

  moveEvent(e: any) {
    e.preventDefault(); //阻止默认事件(上下滑动)
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
    window.location.href = `/#/out?name=${utils.getQuery("name") || ""}`;
  }

  render() {
    const { panoramicStyle } = this.state;

    return (
      <section className="internal-page">
        <div id="viewer-360"></div>

        <div id="bottom-bar" className="bottom-bar">
          <div
            onClick={this.onOutClick}
            className="panoramic"
            style={{ ...panoramicStyle }}
          >
            <img
              className="panoramic-icon"
              src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/panoramic.png"
            ></img>
            全景
          </div>
        </div>

        <style jsx>
          {`
            .internal-page {
              width: 100vw;
              height: 100vh;
              overflow: hidden;
              position: fixed;
              top: 0;
              z-index: 1000;
              background-color: white;
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

export default Internal;
