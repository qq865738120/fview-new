import * as React from "react";
import utils from "../public/js/utils";
import MokeData from "../public/moke";
import PhotoSwipeWap, { PhotoSwipeItems } from "./components/PhotoSwipe";
import eye from "../public/js/3deye";
import Loading from "./components/Loading";

interface OutMState {
  photoItems: PhotoSwipeItems[];
}

class Out extends React.Component<any, OutMState & any> {
  constructor(props: any) {
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
      isPortrait: true,
      isLoading: true,
      rotate: 0,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000 + Math.random() * 2000);

    document.body.addEventListener("touchmove", this.moveEvent, {
      passive: false,
    });
    const barDom = document.getElementById("bottom-bar");
    barDom &&
      barDom.addEventListener("touchmove", this.moveEvent, { passive: false });

    this.setState({
      currType: utils.getQuery("name"),
    });
    const { angle, angleType } = this.state;
    const currType = utils.getQuery("name") as string;

    document.title = `中联起重机${currType}全景展示`;

    const outData = new MokeData().getOutList();
    console.log("data", outData[currType], currType);

    const photoItems = (outData[currType][angle[angleType]] || []).map(
      (item: any) => {
        return {
          src: item.url || "",
          w: "1080",
          h: "1920",
        };
      }
    );
    this.setState({ photoItems });

    new eye("#display-3d", {
      imagePath: (index: any, ang?: any) => {
        // const arr =
        //   data.data[currType] &&
        //   data.data[currType][ang || "fv"][index - 1].url.split("/");
        // const auto = ((arr && arr[5]) || "").split("?")[1];
        // console.log("auto", auto);

        // return (
        //   arr[0] +
        //   "//" +
        //   arr[2] +
        //   "/" +
        //   arr[3] +
        //   "/" +
        //   arr[4] +
        //   "/" +
        //   index +
        //   ".png" +
        //   "?" +
        //   auto
        // );
        return outData[currType][ang || "fv"][index - 1].url;
      },
      totalImages: 36,
      imageExtension: "png",
      width: "100%",
      height: "100%",
      angle,
      angleType, // 角度类型，对应angle中的数组索引
      handlerMove: (index: any, ang?: any) => {
        console.log("11111", index, ang);
        this.setState({ currImgIndex: index, angleType: ang });
      },
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
            overflow: "hidden",
          },
          panoramicStyle: {
            transform: `rotate(0)`,
          },
          isPortrait: false,
        });
      } else {
        //竖屏
        this.setState({
          style360: {
            width: width + "px",
            height: height + "px",
            overflow: "hidden",
          },
          panoramicStyle: {
            transform: `rotate(0)`,
          },
          isPortrait: true,
        });
      }
    }, 150);
  }

  onPhotoClick = () => {
    const { angle, angleType } = this.state;

    const currType = utils.getQuery("name") as string;

    const outData = new MokeData().getOutList();

    const photoItems = (outData[currType][angle[angleType]] || []).map(
      (item: any) => {
        return {
          src: item.url || "",
          w: 1080,
          h: 1920,
        };
      }
    );
    // this.setState({ photoItems: [] });
    this.setState({ photoItems: [...photoItems], rotate: -90, isShow: true });
  };

  onHotPointClick = (index: any) => {
    console.log("index", index);
    console.log(
      "url",
      "https://bj.bcebos.com/v1/fview-zl-0416/ZTC251V-dt/" + index
    );

    document.getElementsByClassName("");

    const photoItems = [
      {
        src: "https://bj.bcebos.com/v1/fview-zl-0416/ZTC251V-dt/" + index,
        w: 1415,
        h: 945,
      },
    ];
    console.log("photoItems", photoItems);

    this.setState({
      photoItems: [...photoItems],
      isShow: true,
      currImgIndex: 1,
      rotate: 0,
    });
  };

  onInternalClick(index: any) {
    window.location.href = `/#/internal?name=${
      utils.getQuery("name") || ""
    }&index=${index}`;
  }

  onHomeClick() {
    window.location.href = `/#/`;
  }

  render() {
    const {
      currType,
      currImgIndex,
      style360,
      panoramicStyle,
      photoItems,
      isShow,
      warpStyle,
      isPortrait,
      isLoading,
      angle,
      angleType,
      rotate,
    } = this.state;

    const outData = new MokeData().getOutList();

    console.log("DATA", outData[currType], currType, angle[angleType]);
    return (
      <section className="internal-warp" style={{ ...warpStyle }}>
        <style jsx>
          {`
            .internal-warp {
              width: 100vw;
              height: 100vh;
              background-color: white;
            }
            .internal-page {
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
              margin: 0 0.3rem;
            }

            .panoramic-icon {
              width: 0.7rem;
              height: 0.7rem;
              margin-bottom: 0.1rem;
            }

            .hot-point {
              width: 0.2rem;
              height: 0.2rem;
              background-color: #d4b04e;
              opacity: 0.4;
              border-radius: 100%;
              position: absolute;
              box-shadow: 0 0 0.12rem #c7c1a4;
              animation: hot-bg 1.2s linear infinite;
            }

            @keyframes hot-bg {
              0% {
                box-shadow: 0 0 0.08rem #c7c1a4;
                background-color: #c7c1a4;
                opacity: 0.4;
              }

              30% {
                box-shadow: 0 0 0.12rem #ffdf43;
                background-color: #ffdf43;
                opacity: 0.9;
              }

              70% {
                box-shadow: 0 0 0.12rem #ffdf43;
                background-color: #ffdf43;
                opacity: 0.9;
              }

              100% {
                box-shadow: 0 0 0.08rem #c7c1a4;
                background-color: #c7c1a4;
                opacity: 0.4;
              }
            }
          `}
        </style>

        <section className="internal-page mobile">
          <div id="display-3d" style={{ ...style360 }}></div>

          <div id="bottom-bar" className="bottom-bar">
            {isPortrait && (
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
            )}
            <div
              onClick={this.onInternalClick.bind(this, 0)}
              className="panoramic"
              style={{ ...panoramicStyle }}
            >
              <img
                className="panoramic-icon"
                src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/panoramic.png"
              ></img>
              驾驶室
            </div>
            <div
              onClick={this.onInternalClick.bind(this, 1)}
              className="panoramic"
              style={{ ...panoramicStyle }}
            >
              <img
                className="panoramic-icon"
                src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/panoramic.png"
              ></img>
              操控室
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
          {isLoading && <Loading />}
          {(
            (outData[currType] &&
              outData[currType][angle[angleType] || "fv"][currImgIndex - 1]
                .hotPoint) ||
            []
          ).map((item: any, index: any) => (
            <div
              key={index}
              className="hot-point"
              onClick={this.onHotPointClick.bind(this, index)}
              style={{
                left: utils.isServer
                  ? item.x
                  : utils.px2Rem(window.innerWidth / 2) + item.x + "rem",
                top: utils.isServer
                  ? item.y
                  : utils.px2Rem(window.innerHeight / 2) + item.y + "rem",
                display: item.x === 0 && item.y === 0 ? "none" : "block",
              }}
            />
          ))}
        </section>

        {isShow && (
          <PhotoSwipeWap
            items={photoItems}
            index={currImgIndex - 1}
            rotate={rotate}
          />
        )}
      </section>
    );
  }
}

export default Out;
