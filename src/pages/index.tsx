import * as React from "react";
import MokeData from "../public/moke";
import Loading from "./components/Loading";
import axios from "axios";
import config from "../config/index";
const wx = require("weixin-js-sdk");

export default class Index extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      list: new MokeData().getAutoList(),
      listStyle: {},
      indexStyle: {},
      isLoading: true,
    };
  }

  async UNSAFE_componentWillMount() {
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
        title: "中联重科起重机VR全景看车", // 分享标题
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
        title: "中联重科起重机VR全景看车", // 分享标题
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

    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1200);
  }

  async componentDidMount() {
    document.title = `中联重科起重机VR全景看车`;

    setTimeout(() => {
      this.resize();
      window.addEventListener("resize", () => {
        this.resize();
      });
    }, 0);
  }

  onOutClick(name: string) {
    window.location.href = `/#/out?name=${name}`;
  }

  resize() {
    setTimeout(() => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      if (width > height) {
        //横屏
        this.setState({
          indexStyle: {
            // maxWidth: "375px"
          },
        });
      } else {
        //竖屏
        this.setState({
          indexStyle: {},
        });
      }
    }, 150);
  }

  render() {
    const { list, indexStyle, isLoading } = this.state;

    return (
      <section className="index-page" style={{ ...indexStyle }}>
        <div className="top-bar" style={{ ...indexStyle }}>
          <img
            src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/logo-zoomlion.png"
            className="logo"
          ></img>
          <img
            src="https://fview-static.cdn.bcebos.com/zoomlion-360view/img/logo-words.png"
            className="desc"
          ></img>
        </div>
        <div className="list">
          <div style={{ height: "2rem" }}></div>
          <img
            className="banner"
            src="https://gz.bcebos.com/v1/fview-static/zoomlion-360view/img/banner.png"
          />
          {list.map((item: any, index: number) => (
            <div
              className="item"
              key={index}
              style={{
                justifyContent: index % 2 === 0 ? "flex-end" : "flex-start",
              }}
            >
              <img
                onClick={this.onOutClick.bind(this, item.name)}
                className="item-img"
                src={item.image}
              />
            </div>
          ))}
          <p className="bottom">
            <span
              style={{
                fontSize: "0.26rem",
                color: "#e4e4e4",
                fontWeight: "bold",
              }}
            >
              湖南凝创科技有限公司
            </span>
            <br />
            <span style={{ fontSize: "0.2rem" }}>提供技术支持</span>
          </p>
        </div>

        {isLoading && <Loading />}
        <style jsx>
          {`
            .index-page {
              background-image: url("https://fview-static.cdn.bcebos.com/zoomlion-360view%2Fimg%2Fbg-index.png");
              background-size: cover;
              margin: 0 auto;
            }

            .top-bar {
              height: 1.5rem;
              width: 100%;
              position: fixed;
              top: 0;
              display: flex;
              align-items: center;
              justify-content: space-between;
            }

            .logo {
              width: 2rem;
              margin-left: 0.5rem;
            }

            .desc {
              width: 2rem;
              margin-right: 0.5rem;
            }

            .banner {
              width: 90%;
              margin: 0 auto;
              display: block;
            }

            .list {
              height: 100vh;
              width: 100%;
              overflow: scroll;
            }

            .list > .item {
              width: 100%;
              display: flex;
              align-items: center;
            }

            .list > .item > .item-img {
              width: 100%;
              object-fit: cover;
            }

            .bottom {
              text-align: center;
              color: #b3b3b3;
              line-height: 0.4rem;
              margin: 1rem 0.4rem 0.6rem;
            }
          `}
        </style>
      </section>
    );
  }
}
