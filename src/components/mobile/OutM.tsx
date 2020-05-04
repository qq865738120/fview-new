import * as React from "react";
import { observer, inject } from "mobx-react";
import AppStore from "../../stores/app";
import utils from "../../utils/index";
import MokeData from "../../moke";
import CarStore from "../../stores/car";
import { toJS } from "mobx";
import Link from "next/link";
import { withRouter } from "next/dist/client/router";
import { WithRouterProps } from "next/dist/client/with-router";
import Router from "next/router";
import PhotoSwipeWap, { PhotoSwipeItems } from "../common/PhotoSwipe";

interface OutMProps {
  appStore?: AppStore;
  carStore?: CarStore;
}

interface OutMState {
  photoItems: PhotoSwipeItems[];
}

@inject("appStore")
@inject("carStore")
@observer
class OutM extends React.PureComponent<
  OutMProps & WithRouterProps,
  any & OutMState
> {
  constructor(props) {
    super(props);
    this.state = {
      currType: "",
      currImgIndex: 1,
      angle: ["fv", "vv"],
      angleType: 0,
      style360: {},
      panoramicStyle: {},
      photoItems: [],
      isShow: false,
    };
  }

  componentDidMount() {
    // if (!this.props.router.query.name) {
    //   Router.replace("/")
    //   return;
    // }

    this.setState({ currType: this.props.router.query.name });
    const { angle, angleType } = this.state;

    const currType = this.props.router.query.name as string;

    const { outData } = this.props.carStore;
    const data = toJS(outData);
    console.log("data", data.data[currType], currType);

    const photoItems = (data.data[currType][angle[angleType]] || []).map(
      (item: any) => {
        return {
          src: item.url || "",
          w: "1080",
          h: "1920",
        };
      }
    );
    this.setState({ photoItems });

    ($("#display-3d") as any).vc3dEye &&
      ($("#display-3d") as any).vc3dEye({
        imagePath: (index, ang?) => {
          const arr =
            data.data[currType] &&
            data.data[currType][ang || "fv"][index - 1].url.split("/");
          const auto = ((arr && arr[5]) || "").split("?")[1];
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
        angle,
        angleType, // 角度类型，对应angle中的数组索引
        handlerMove: (index, ang?) => {
          console.log("11111", index, angleType);
          this.setState({ currImgIndex: index, angleType });
        },
      });

    setTimeout(() => {
      this.resize();
      window.addEventListener("resize", () => {
        this.resize();
      });
    }, 0);
  }

  resize() {
    setTimeout(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width > height) {
        //横屏
        this.setState({
          style360: {
            transformOrigin: "left top",
            transform: `rotate(-90deg) translate(${-height}px, 0px)`,
            width: height + "px",
            height: width + "px",
          },
          panoramicStyle: {
            transform: `rotate(0)`,
          },
        });
      } else {
        //竖屏
        this.setState({
          style360: {},
          panoramicStyle: {},
        });
      }
    }, 150);
  }

  onPhotoClick = () => {
    const { angle, angleType } = this.state;

    const currType = this.props.router.query.name as string;

    const { outData } = this.props.carStore;
    const data = toJS(outData);

    const photoItems = (data.data[currType][angle[angleType]] || []).map(
      (item: any) => {
        return {
          src: item.url || "",
          w: "1080",
          h: "1920",
        };
      }
    );
    this.setState({ photoItems });
    this.setState({ photoItems: [...photoItems], isShow: true });
  };

  onInternalClick() {
    window.location.href = `/internal?name=${
      utils.getQuery("name") || ""
    }&index=${0}`;
  }

  onHomeClick() {
    window.location.href = `/`;
  }

  render() {
    const { router } = this.props;
    const { outData } = this.props.carStore;
    const data = toJS(outData);
    const {
      currType,
      currImgIndex,
      angle,
      angleType,
      style360,
      panoramicStyle,
      photoItems,
      isShow,
    } = this.state;
    console.log("DATA", data.data[currType], currType);

    return (
      <section className="internal-warp">
        <style jsx>
          {`
            .internal-warp {
              width: 100vw;
              height: 100vh;
            }
            .internal-page {
              background-image: url("https://fview-static.cdn.bcebos.com/zoomlion-360view/img/bg-mobile.jpg");
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

            .hot-point {
              width: 0.18rem;
              height: 0.18rem;
              background-color: #0779e4;
              border-radius: 100%;
              opacity: 0.6;
              position: absolute;
              box-shadow: 0.01rem 0.01rem 0.12rem #043058;
            }
          `}
        </style>
        <section className="internal-page mobile">
          <div id="display-3d" style={{ ...style360 }}></div>

          <div className="bottom-bar">
            <div
              className="panoramic"
              style={{ ...panoramicStyle }}
              onClick={this.onPhotoClick}
            >
              <img
                className="panoramic-icon"
                src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/photo.png"
              ></img>
              预览图
            </div>
            <div
              onClick={this.onInternalClick}
              className="panoramic"
              style={{ ...panoramicStyle }}
            >
              <img
                className="panoramic-icon"
                src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/panoramic.png"
              ></img>
              内饰
            </div>
            <div
              onClick={this.onHomeClick}
              className="panoramic"
              style={{ ...panoramicStyle }}
            >
              <img
                className="panoramic-icon"
                src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/home.png"
              ></img>
              主页
            </div>
          </div>

          {(
            (data.data[currType] &&
              data.data[currType][angle[angleType] || "fv"][currImgIndex - 1]
                .hotPoint) ||
            []
          ).map((item, index) => (
            <div
              className="hot-point"
              onClick={this.onInternalClick}
              style={{ left: item.x, top: item.y }}
            />
          ))}
        </section>

        {isShow && (
          <PhotoSwipeWap items={photoItems} index={currImgIndex - 1} />
        )}
      </section>
    );
  }
}

export default withRouter(OutM);
