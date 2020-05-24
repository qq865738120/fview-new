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

  async componentDidMount() {
    const wxSignature = await axios.get(
      `https://zoomlion.360view.iotnc.cn/api/wx/signature?url=${encodeURIComponent(
        "https://zoomlion.360view.iotnc.cn/#/"
      )}`
    );

    wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: config.appId, // 必填，公众号的唯一标识
      timestamp: wxSignature.data.timestamp, // 必填，生成签名的时间戳
      nonceStr: wxSignature.data.noncestr, // 必填，生成签名的随机串
      signature: wxSignature.data.signature, // 必填，签名
      jsApiList: ["checkJsApi", "onMenuShareAppMessage", "onMenuShareTimeline"], // 必填，需要使用的JS接口列表
    });
    wx.ready(() => {
      //需在用户可能点击分享按钮前就先调用
      //自定义“分享给朋友”及“分享到QQ”按钮的分享内容（1.4.0）
      alert("OK");
      wx.onMenuShareAppMessage({
        title: "", // 分享标题
        desc: "", // 分享描述
        link: "", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "", // 分享图标
        success: function () {
          // 设置成功
          alert("设置成功updateAppMessageShareData");
        },
      });

      //自定义“分享到朋友圈”及“分享到QQ空间”按钮的分享内容（1.4.0）
      wx.onMenuShareAppMessage({
        title: "", // 分享标题
        link: "", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: "", // 分享图标
        success: function () {
          // 设置成功
          alert("设置成功updateTimelineShareData");
        },
      });
    });

    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 500 + Math.random() * 1000);
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
          {list.map((item: any, index: number) => (
            <div
              className="item"
              key={index}
              style={{
                justifyContent: index % 2 === 0 ? "flex-start" : "flex-end",
              }}
            >
              <img
                onClick={this.onOutClick.bind(this, item.name)}
                className="item-img"
                src={item.image}
              />
            </div>
          ))}
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

            .list {
              height: 100vh;
              width: 100%;
              overflow: scroll;
            }

            .list > .item {
              height: 8rem;
              display: flex;
              align-items: center;
            }

            .list > .item > .item-img {
              height: 6rem;
              object-fit: cover;
            }
          `}
        </style>
      </section>
    );
  }
}
