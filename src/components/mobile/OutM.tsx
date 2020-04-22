import * as React from "react";
import { observer, inject } from "mobx-react";
import AppStore from "../../stores/app";
import utils from "../../utils/index";
import MokeData from "../../moke";
import CarStore from "../../stores/car";
import { toJS } from "mobx";
import Link from "next/link";
import { Router, withRouter } from "next/dist/client/router";
import { WithRouterProps } from "next/dist/client/with-router";

interface OutMProps {
  appStore?: AppStore;
  carStore?: CarStore;
}

@inject("appStore")
@inject("carStore")
@observer
class OutM extends React.PureComponent<OutMProps & WithRouterProps, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const current = this.props.router.query.name as string;
    const angle = "fv";
    console.log("current", current);

    const { outData } = this.props.carStore;
    const data = toJS(outData);
    ($("#display-3d") as any).vc3dEye &&
      ($("#display-3d") as any).vc3dEye({
        imagePath: (index, ang?) => {
          const arr = data.data[current][ang || "fv"][index - 1].url.split("/");
          const auto = arr[5].split("?")[1];
          return (
            arr[0] +
            "//" +
            arr[2] +
            "/" +
            arr[3] +
            "/" +
            arr[4] +
            "/" +
            index +
            ".png" +
            "?" +
            auto
          );
        },
        totalImages: 36,
        imageExtension: "png",
        width: "100vw",
        height: "100vh",
        angle: ["fv", "vv"],
        angleType: 0,
      });
  }

  render() {
    const { router } = this.props

    return (
      <section className="internal-warp">
        <style jsx>
          {`
            .internal-warp {
              width: 100vw;
              height: 100vh;
            }
            .internal-page {
              background-image: url("/static/bg-mobile.jpg");
              background-size: 100% 100%;
              width: 100%;
              height: 100%;
            }

            .mobile {
            }

            #display-3d {
              width: 100%;
              height: 100%;
              background-size: 100%;
              background-repeat: no-repeat;
              background-position: center center;
            }

            .bottom-bar {
              position: absolute;
              bottom: 0.3rem;
              left: 0;
              right: 0;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .panoramic {
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              font-size: 0.2rem;
              transform: rotate(90deg);
              margin: 0 0.3rem;
            }

            .panoramic-icon {
              width: 0.7rem;
              height: 0.7rem;
              margin-bottom: 0.1rem;
            }
          `}
        </style>
        <section className="internal-page mobile">
          <div id="display-3d"></div>

          <div className="bottom-bar">
            <Link href={{ pathname: "/internal", query: { name: router.query.name } }} prefetch>
              <div className="panoramic">
                <img
                  className="panoramic-icon"
                  src="/static/panoramic.png"
                ></img>
                内饰
              </div>
            </Link>
            <Link href="/" prefetch>
              <div className="panoramic">
                <img
                  className="panoramic-icon"
                  src="/static/home.png"
                ></img>
                主页
              </div>
            </Link>
          </div>
        </section>
      </section>
    );
  }
}

export default withRouter(OutM);
