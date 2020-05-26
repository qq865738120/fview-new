import * as React from "react";
import utils from "../public/js/utils";
import MokeData from "../public/moke";
import PhotoSwipeWap, { PhotoSwipeItems } from "./components/PhotoSwipe";
import eye from "../public/js/3deye";
import Loading from "./components/Loading";
const wx = require("weixin-js-sdk");
import config from "../config/index";
import axios from "axios";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

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
      detailPhotoItems: [],
      isShow: false,
      isShowDetail: false,
      isPortrait: true,
      isLoading: true,
      rotate: 0,
    };
  }

  async componentDidMount() {
    const wxSignature = await axios.get(
      `https://zoomlion.360view.iotnc.cn/api/wx/signature?url=${encodeURIComponent(
        window.location.href.split("#")[0]
      )}`
    );
    wx.config({
      debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: config.appId, // 必填，公众号的唯一标识
      timestamp: wxSignature.data.timestamp, // 必填，生成签名的时间戳
      nonceStr: wxSignature.data.noncestr, // 必填，生成签名的随机串
      signature: wxSignature.data.signature, // 必填，签名
      jsApiList: ["checkJsApi", "onMenuShareAppMessage", "onMenuShareTimeline"], // 必填，需要使用的JS接口列表
    });
    wx.ready(() => {
      //需在用户可能点击分享按钮前就先调用
      //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
      wx.onMenuShareAppMessage({
        title: `中联起重机${utils.getQuery("name")}全景展示`, // 分享标题
        desc: "", // 分享描述
        link: "https://zoomlion.360view.iotnc.cn/", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/share-thumb.jpg", // 分享图标
        success: function () {
          // 设置成功
        },
      });

      //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
      wx.onMenuShareAppMessage({
        title: `中联起重机${utils.getQuery("name")}全景展示`, // 分享标题
        desc: "", // 分享描述
        link: "https://zoomlion.360view.iotnc.cn/", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/share-thumb.jpg", // 分享图标
        success: function () {
          // 设置成功
        },
      });
    });

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

  onHotPointClick = (item: any) => {
    console.log("index", item);

    const photoItems = [
      {
        src: "https://bj.bcebos.com/v1/fview-zl-0416/ZTC251V-dt/" + item.url,
        w: 1415,
        h: 945,
      },
    ];
    console.log("photoItems", photoItems);

    this.setState({
      detailPhotoItems: [...photoItems],
      isShowDetail: true,
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
      detailPhotoItems,
      isShow,
      isShowDetail,
      warpStyle,
      isPortrait,
      isLoading,
      angle,
      angleType,
      rotate,
    } = this.state;

    const outData = new MokeData().getOutList();

    console.log(
      "11111",
      outData[currType] &&
        outData[currType][angle[angleType] || "fv"][currImgIndex - 1].detailImgs
    );

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

            .detail-bar {
              position: absolute;
              top: 0;
              left: 0;
              height: 1rem;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              background-color: rgba(120, 172, 57, 0.4);
              box-shadow: 0rem -0.2rem 0.7rem 0px hsla(87, 67%, 17%, 0.55);
            }

            .detail-bar-imgs {
              width: 1rem;
              height: 0.7rem;
              margin: 0 0.05rem;
            }

            .fade-leave.fade-leave-active,
            .fade-enter {
              opacity: 0;
              transition: opacity 0.2s;
            }
            .fade-enter.fade-enter-active,
            .fade-leave {
              opacity: 1;
              transition: opacity 0.2s;
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
          {/* {(
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
          ))} */}
          <section className="detail-bar">
            <CSSTransitionGroup
              component="div"
              transitionName="fade"
              transitionEnterTimeout={150}
              transitionLeaveTimeout={100}
            >
              {(
                (outData[currType] &&
                  outData[currType][angle[angleType] || "fv"][currImgIndex - 1]
                    .detailImgs) ||
                []
              ).map((item: any, index: any) => {
                return (
                  item.isShow && (
                    <img
                      onClick={this.onHotPointClick.bind(this, item)}
                      className="detail-bar-imgs"
                      src={
                        "https://bj.bcebos.com/v1/fview-zl-0416/ZTC251V-dt/" +
                        item.url
                      }
                      key={item.url}
                    />
                  )
                );
              })}
            </CSSTransitionGroup>
          </section>
        </section>

        {isShow && (
          <PhotoSwipeWap
            items={photoItems}
            index={currImgIndex - 1}
            rotate={rotate}
          />
        )}
        {isShowDetail && (
          <PhotoSwipeWap items={detailPhotoItems} index={0} rotate={rotate} />
        )}
      </section>
    );
  }
}

export default Out;
