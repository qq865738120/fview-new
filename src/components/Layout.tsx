import Header from "next/head";
import { PureComponent } from "react";
import { inject, observer } from "mobx-react";
import * as React from "react";
import AppStore from "../stores/app";

interface LayoutProps {
  appStore?: AppStore;
}

interface LayoutStates {}

@inject("appStore")
@observer
export default class Layout extends React.PureComponent<
  LayoutProps,
  LayoutStates
> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
    });

    // setTimeout(() => {
    //   document.body.addEventListener(
    //     "touchmove",
    //     (e) => {
    //       e.preventDefault(); //阻止默认事件(上下滑动)
    //     },
    //     { passive: false }
    //   );
    // }, 400);
  }

  resize() {
    const { appStore } = this.props;
    if (this.isPc()) {
      document.getElementsByTagName("html")[0].style.fontSize = "";
      appStore.setIsMobile(false);
    } else {
      setTimeout(() => {
        var width = window.innerWidth,
          height = window.innerHeight,
          style = "";
        // 设计稿宽度, 750|640|520
        var designWith = 750;

        // 设计稿上1px对应设备上多少个单位的vw, 100vw表示设备屏幕宽度
        var vw = 100 / designWith;

        // html的font-size的大小
        // 同时也是单位rem的大小
        // 为了方便后面的尺寸计算,放大100倍,即设计稿上的100px;
        var fontSize = 100 * vw;

        // 设置html的font-size, 可以直接写在 css 里面
        document.getElementsByTagName("html")[0].style.fontSize =
          fontSize + (width >= height ? "vh" : "vw");
        appStore.setIsMobile(true);
      }, 250);
    }
  }

  isPc() {
    var userAgentInfo = navigator.userAgent;
    var Agents = new Array(
      "Android",
      "iPhone",
      "SymbianOS",
      "Windows Phone",
      "iPad",
      "iPod"
    );
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

  render() {
    const { isMobile, title } = this.props.appStore;

    if (isMobile) {
      return (
        <>
          <Header>
            <title>{title}</title>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
            />
          </Header>
          {this.props.children}
        </>
      );
    } else {
      return (
        <>
          <Header>
            <title>{title}</title>
          </Header>
          {this.props.children}
        </>
      );
    }
  }
}
