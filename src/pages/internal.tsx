import * as React from "react";
import { Viewer } from "photo-sphere-viewer";
import utils from "../public/js/utils";
import MokeData from "../public/moke";
const wx = require("weixin-js-sdk");
import config from "../config/index";
import axios from "axios";

class Internal extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      panoramicStyle: {},
      isShowTips: false,
    };
  }

  async componentDidMount() {
    const current = utils.getQuery("name") as string;
    const index = utils.getQuery("index") as string;

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
      jsApiList: [
        "checkJsApi",
        "onMenuShareAppMessage",
        "onMenuShareTimeline",
        "hideOptionMenu",
      ], // 必填，需要使用的JS接口列表
    });
    wx.ready(() => {
      //需在用户可能点击分享按钮前就先调用
      //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
      wx.onMenuShareAppMessage({
        title: `中联起重机${current}${index === "0" ? "驾驶室" : "操控室"}`, // 分享标题
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
        title: `中联起重机${current}${index === "0" ? "驾驶室" : "操控室"}`, // 分享标题
        desc: "", // 分享描述
        link: "https://zoomlion.360view.iotnc.cn/", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl:
          "https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/share-thumb.jpg", // 分享图标
        success: function () {
          // 设置成功
        },
      });

      wx.hideOptionMenu();
    });

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

    const viewer = new Viewer({
      panorama: outData[current]["int"][index].url,
      container: document.getElementById("viewer-360"), // 放全景图的元素
      navbar: false,
      fisheye: true,
    });

    const viewerTimer = setInterval(() => {
      if (viewer.prop.ready) {
        this.setState({ isShowTips: true });
        clearInterval(viewerTimer);
      }
    }, 10);

    setTimeout(() => {
      this.resize();
      window.addEventListener("resize", () => {
        this.resize();
      });
    }, 0);

    setTimeout(() => {
      this.setState({ isShowTips: false });
    }, 4000);
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
    const { panoramicStyle, isShowTips } = this.state;

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

        {isShowTips && (
          <img
            className="tips"
            style={{
              left: (window.innerWidth - 150) / 2 + "px",
              top: (window.innerHeight - 150) / 2 + "px",
            }}
            src="https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/tips-image.png"
          />
        )}

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

            .tips {
              width: 150px;
              position: absolute;
              z-index: 10000;
            }
          `}
        </style>
      </section>
    );
  }
}

export default Internal;
