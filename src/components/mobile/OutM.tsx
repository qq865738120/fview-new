import * as React from "react";
import { observer, inject } from "mobx-react";
import AppStore from "../../stores/app";
import utils from "../../utils/index";
import MokeData from "../../moke";
import CarStore from "../../stores/car";
import { toJS } from "mobx";
import Link from "next/link";

interface OutMProps {
  appStore?: AppStore;
  carStore?: CarStore;
}

@inject("appStore")
@inject("carStore")
@observer
export default class OutM extends React.PureComponent<OutMProps, any> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const current = "ZTC350H";
    const angle = "fv";

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
          `}
        </style>
        <section className="internal-page mobile">
          <div id="display-3d"></div>
          <Link href="/internal">
            <p
              style={{ position: "absolute", top: 0 }}
            >
              全景
            </p>
          </Link>
        </section>
      </section>
    );
  }
}
